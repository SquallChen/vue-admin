/* import ol from 'openlayers/dist/ol.js';
import 'openlayers/dist/ol.css';

import './popupoverlay.js';
import './popupoverlay.css'; */

function olMap() {
  // 天地图
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

  var tianDiTuSatellite = new ol.layer.Tile({
    title: '天地图卫星影像',
    source: new ol.source.XYZ({
      url: 'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}'
    })
  });

  var viewParams = '5c52defb813d4caa92803767d2688cb5';
  var format = 'image/png';
  /* var bounds = [111.266532897949, 42.4910784836169,
  111.40990447998, 43.3003392409319
]; */
  var untiled = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      ratio: 1,
      url: 'http://119.23.161.165:7070/geoserver/zydh/wms',
      params: {
        FORMAT: format,
        VERSION: '1.1.1',
        VIEWPARAMS: 'project_id:' + viewParams,
        STYLES: '',
        LAYERS: 'zydh:zydh_compose'
      }
    })
  });

  var tiled = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
      url: 'http://119.23.161.165:7070/geoserver/zydh/wms',
      params: {
        FORMAT: format,
        VERSION: '1.1.1',
        tiled: true,
        VIEWPARAMS: 'project_id:' + viewParams,
        STYLES: '',
        LAYERS: 'zydh:zydh_compose',
        tilesOrigin: 78.2616546853281 + ',' + 43.0910749523674
      }
    })
  });

  // 地图初始化, 天地图 + 自定义线图层 + 自定义点图层
  var center = [122.73254703258111, 41.3393205086786];

  // 比例尺控件
  var scaleLineControl = new ol.control.ScaleLine();

  var zoom = 4;
  // 调用外部的JS创建弹出框
  var popup = new ol.Overlay.Popup({
    popupClass: 'black', // "tooltips", "warning" "black" "default", "tips", "shadow",
    closeBox: false,
    positioning: 'auto',
    autoPan: true,
    autoPanAnimation: { duration: 250 }
  });

  var olMap = new ol.Map({
    layers: [
      tianDiTuMapLayer, tianDiTuAnnotation, untiled, tiled
    ],
    overlays: [popup],
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      }),
      attribution: false
    }).extend([
      scaleLineControl
    ]),
    view: new ol.View({
      // 指定投影使用EPSG:4326
      projection: 'EPSG:4326',
      constrainRotation: false,
      enableRotation: false,
      center: center,
      // center: [78.2654495239258, 43.0904541015625],
      zoom: zoom,
      minZoom: 4,
      maxZoom: 24
    })
  });

  olMap.on('singleclick', function (evt) {
    var view = olMap.getView();
    var viewResolution = view.getResolution();
    var source = untiled.get('visible') ? untiled.getSource() : tiled.getSource();
    var url = source.getGetFeatureInfoUrl(evt.coordinate, viewResolution, view.getProjection(), { 'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 50 });
    popup.show(evt.coordinate, '1234');
  });

/* olMap.on('pointermove', function (evt) {
  if (evt.dragging) {
      return;
  }
  var pixel = olMap.getEventPixel(evt.originalEvent);
  var hit = olMap.forEachLayerAtPixel(pixel, function (l,a,b) {
      console.log(l);
      if (l.S.source.g === "http://119.23.161.165:7070/geoserver/zydh/wms") {
          return true;
      }
  });
  olMap.getTargetElement().style.cursor = hit ? 'pointer' : '';
}); */
}

export { olMap };
