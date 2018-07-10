<template>
  <div id="map" style="width: 100%;height:100%"></div>
</template>


<script>
export default {
  name: 'olmap',
  created() {
    /* var Layer = new ol.layer.Tile({
        title: 'test',
        preload: Infinity,
        source: new ol.source.XYZ({
          url: 'http://172.16.10.118:9879/geoserver/cors/wms?service=WMS&version=1.1.0&request=GetMap&layers=cors:station_info&styles=&bbox=0.351635485887527,0.284759908914566,117.299736022949,39.3228225708008&width=768&height=330&srs=EPSG:4326&format=application/openlayers'
        })
      }); */
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
      // var tiled = new ol.layer.Tile({
      //   visible: false,
      //   source: new ol.source.TileWMS({
      //     url: 'http://172.16.10.118:9879/geoserver/cors/wms',
      //     params: {
      //       FORMAT: format,
      //       VERSION: '1.1.1',
      //       tiled: true,
      //       STYLES: '',
      //       LAYERS: 'cors:station_info',
      //       tilesOrigin: 0.351635485887527 + ',' + 0.284759908914566
      //     }
      //   })
      // });

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
        layers: [tianDiTuMapLayer,tianDiTuAnnotation,untiled],
        view: new ol.View({
          // 设置地图中心
          projection: 'EPSG:4326',
          center: [116.90470419	, 39.001189],
          zoom: 10,
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
.ol-attribution{
  display: none;
}
</style>