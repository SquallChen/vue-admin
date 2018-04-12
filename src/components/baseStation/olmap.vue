<template>
  <div id="map" style="width: 100%;height:100%"></div>
</template>


<script>
export default {
  name: 'olmap',
  created() {
    this.$nextTick(
      () =>
        // 创建地图
        new ol.Map({
          layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
          view: new ol.View({
            // 设置成都为地图中心
            center: [104.06, 30.67],
            projection: 'EPSG:4326',
            zoom: 10,
            // 限制地图缩放最大级别为14，最小级别为10
            minZoom: 10,
            maxZoom: 14
          }),
          target: 'map'
        })
    );
  }
};
</script>
<style>

</style>