<template>
  <div id="map" style="width: 100%;height:100%"></div>
</template>


<script>
export default {
  name: 'olmap',
  created() {
    this.$nextTick(() => {
      var format = 'image/png';
      var untiled = new ol.layer.Image({
        source: new ol.source.ImageWMS({
          ratio: 1,
          url: 'http://172.16.10.118:9879/geoserver/cors/wms',
          params: {
            FORMAT: format,
            VERSION: '1.1.1',
            STYLES: '',
            LAYERS: 'cors:station_info'
          }
        })
      });

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
      // 创建地图
      new ol.Map({
        //默认控件隐藏，并添加比例尺控件
        controls: ol.control.defaults({
          attribution: false,
        }).extend([ new ol.control.ScaleLine()]),
        layers: [tianDiTuMapLayer, tianDiTuAnnotation, untiled],
        view: new ol.View({
          // 设置地图中心
          projection: 'EPSG:4326',
          center: [116.90470419, 34.001189],
          zoom: 5,
          minZoom: 0,
          maxZoom: 24
        }),
        target: 'map'
      });
    });
  }
};
</script>
<style>
</style>