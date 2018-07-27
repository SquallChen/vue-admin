<template>
  <div id="map2" style="width: 100%;height:100%"></div>
</template>


<script>
import bus from '@/store/eventbus';
export default {
  name: 'olmap2',
  data() {
    return {};
  },
  created() {
    var map = null;
    // 天地图加载资源
    var tianDiTuMapLayer = new ol.layer.Tile({
      title: '天地图路网',
      preload: Infinity,
      source: new ol.source.XYZ({
        url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
      })
    });
    var tianDiTuAnnotation = new ol.layer.Tile({
      title: '天地图文字标注',
      source: new ol.source.XYZ({
        url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
      })
    });
    var fitZoom;
    var bounds = [113.41251, 23.176832, 113.4172, 23.181522];
    var format = 'image/png';
    var untiled = new ol.layer.Image({
      source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://172.16.10.118:9879/geoserver/cors/wms',
        params: {}
      })
    });

    bus.$on('refreshUserTrack', reg => {
      //点击用户轨迹按钮，判断map是否存在，不存在则新建
      if (!map) {
        this.$nextTick(() => {
          map = new ol.Map({
            //默认控件隐藏，并添加比例尺控件
            controls: ol.control
              .defaults({
                attribution: false
              })
              .extend([new ol.control.ScaleLine()]),
            layers: [tianDiTuMapLayer, tianDiTuAnnotation],
            view: new ol.View({
              // 设置地图中心
              projection: 'EPSG:4326',
              center: [116.90470419, 34.001189],
              zoom: 5,
              minZoom: 0,
              maxZoom: 24
            }),
            target: 'map2'
          });
        });
      } else {
        console.log('map已创建...');
      }
    });

    bus.$on('currentTrackData', reg => {
      //监听选择时间后传回的参数，处理params参数，并用updateParams方法更新
      let newParams = {
        FORMAT: format,
        VERSION: '1.1.1',
        VIEWPARAMS: `user_name:${reg.name};times:${reg.time}`,
        STYLES: '',
        LAYERS: 'cors:user_position'
      };
      untiled.getSource().updateParams(newParams);
       //判断map是否存在，不存在则新建
      if (!map) {
        this.$nextTick(() => {
          map = new ol.Map({
            //默认控件隐藏，并添加比例尺控件
            controls: ol.control
              .defaults({
                attribution: false
              })
              .extend([new ol.control.ScaleLine()]),
            layers: [tianDiTuMapLayer, tianDiTuAnnotation],
            view: new ol.View({
              // 设置地图中心
              projection: 'EPSG:4326'
              // center: [116.90470419, 34.001189],
              // zoom: 5,
              // minZoom: 0,
              // maxZoom: 24
            }),
            target: 'map2'
          });
          //添加layer,并自适应页面显示范围
          map.addLayer(untiled);
          map.getView().fit(bounds, map.getSize());
          fitZoom = map.getView().getZoom();
          console.log(map.getView().getZoom());
        });
      } else {
        console.log('map已创建...');
        map.removeLayer(untiled);
        map.addLayer(untiled);
        map.getView().fit(bounds, map.getSize());
        // if (fitZoom) {
        //   map.getView().setZoom(fitZoom);
        // }else{
        //   map.getView().setZoom(map.getView().getZoom()+3);
        // }
        console.log(map.getView().getZoom());
      }
    });
  },
  mounted() {}
};
</script>
<style>
</style>