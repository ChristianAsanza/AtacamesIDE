proj4.defs("EPSG:32717","+proj=utm +zone=17 +south +datum=WGS84 +units=m +no_defs"); ol.proj.proj4.register(proj4);
    var vista = new ol.View({ projection: "EPSG:32717", center: [630221,10092640], zoom: 11,});
    var map = new ol.Map({target: 'map', view: vista, controls: ol.control.defaults().extend ([new ol.control.MousePosition ({coordinateFormat: ol.coordinate.createStringXY(2),}), new ol.control.ScaleLine (), new ol.control.ZoomSlider (),]),});
    //vista.fit([-8, 40, 0, 45], map.getSize());
    var wmsLayer = new ol.layer.Tile({type:'base', title:'PNOA', source: new ol.source.TileWMS({url: 'http://www.ign.es/wms-inspire/pnoa-ma',params: {LAYERS: 'OI.OrthoimageCoverage', FORMAT: 'image/png'},}) });

var wmsLayer2 = new ol.layer.Tile({type:'base', title:'IGN Base', source: new ol.source.TileWMS({url: 'http://www.ign.es/wms-inspire/ign-base',params: {LAYERS: 'IGNBaseTodo', FORMAT: 'image/png'},}) });

var vectorLayer = new ol.layer.Vector ({ 
    type: 'base',
    title:'Vacia',
});

var wmsLayer3 = new ol.layer.Tile({title:'Drenaje', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'drenaje', FORMAT: 'image/png'},}) });
var wmsLayer4 = new ol.layer.Tile({title:'Pendientes', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'pendientes', FORMAT: 'image/png'},}) });
var wmsLayer5 = new ol.layer.Tile({title:'Línea de buses Interplayas', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'linea_de_bus_interplayas', FORMAT: 'image/png'},}) });
var wmsLayer6 = new ol.layer.Tile({title:'Línea de buses Atacameñita', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'linea_de_buses_atacameñita', FORMAT: 'image/png'},}) });
var wmsLayer7 = new ol.layer.Tile({title:'Postes', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'postes', FORMAT: 'image/png'},}) });
var wmsLayer8 = new ol.layer.Tile({title:'Ruta de recolección de basura', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'recoleccion_de_basura', FORMAT: 'image/png'},}) });
var wmsLayer9 = new ol.layer.Tile({title:'Red de agua potable', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_de_agua', FORMAT: 'image/png'},}) });
var wmsLayer10 = new ol.layer.Tile({title:'Red de alcantarillado', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_de_alcantarillado', FORMAT: 'image/png'},}) });
var wmsLayer11 = new ol.layer.Tile({title:'Red de alcantarillado pluvial', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_de_alcantarillado_pluvia', FORMAT: 'image/png'},}) });
var wmsLayer12 = new ol.layer.Tile({title:'Red de aseo de calles', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_de_aseo_de_calles', FORMAT: 'image/png'},}) });
var wmsLayer13 = new ol.layer.Tile({title:'Red eléctrica', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_de_electricidad', FORMAT: 'image/png'},}) });
var wmsLayer14 = new ol.layer.Tile({title:'Red telefónica', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'red_telefonica', FORMAT: 'image/png'},}) });
var wmsLayer15 = new ol.layer.Tile({title:'Movimientos en Masa', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'movimiento_en_masa', FORMAT: 'image/png'},}) });
var wmsLayer16 = new ol.layer.Tile({title:'Inundación Atacames', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'inundacion_atacames', FORMAT: 'image/png'},}) });
var wmsLayer17 = new ol.layer.Tile({title:'Inundación Sua', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'inundacion_sua', FORMAT: 'image/png'},}) });
var wmsLayer18 = new ol.layer.Tile({title:'Inundación Same', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'inundacion_same', FORMAT: 'image/png'},}) });
var wmsLayer19 = new ol.layer.Tile({title:'Inundación Tonsupa', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'inundacion_tonsupa', FORMAT: 'image/png'},}) });
var wmsLayer20 = new ol.layer.Tile({title:'Alcantarillado sanitario', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'alcan_sanit_50_2010', FORMAT: 'image/png'},}) });
var wmsLayer21 = new ol.layer.Tile({title:'Drenaje de agua lluvia', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'drena_agua_lluvia_54_2010', FORMAT: 'image/png'},}) });
var wmsLayer22 = new ol.layer.Tile({title:'Malecón', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'malecon_54', FORMAT: 'image/png'},}) });
var wmsLayer23 = new ol.layer.Tile({title:'Parque Triangular', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'parque_trian_52', FORMAT: 'image/png'},}) });
var wmsLayer24 = new ol.layer.Tile({title:'Limite cantón Atacames', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'atacames_limit', FORMAT: 'image/png'},}) });
var wmsLayer25 = new ol.layer.Tile({title:'Parroquias ', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'parroquias', FORMAT: 'image/png'},}) });
var wmsLayer26 = new ol.layer.Tile({title:'Curvas de nivel', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'curvas_de_nivel', FORMAT: 'image/png'},}) });
var wmsLayer27 = new ol.layer.Tile({title:'Hidrografía', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'hidrografia', FORMAT: 'image/png'},}) });
var wmsLayer28 = new ol.layer.Tile({title:'Vías', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'ejes_viales', FORMAT: 'image/png'},}) });
var wmsLayer29 = new ol.layer.Tile({title:'Centros poblados', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'centros_poblados', FORMAT: 'image/png'},}) });
var wmsLayer30 = new ol.layer.Tile({title:'Límite Urbano', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'limite_urbano', FORMAT: 'image/png'},}) });
var wmsLayer31 = new ol.layer.Tile({title:'Delimitación predial propiedad horizontal', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'delimitacion_predial_ph', FORMAT: 'image/png'},}) });
var wmsLayer32 = new ol.layer.Tile({title:'Delimitación predial ', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'delimitacion_predial_up', FORMAT: 'image/png'},}) });
var wmsLayer33 = new ol.layer.Tile({title:'Predios', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'cat_cabildo', FORMAT: 'image/png'},}) });
var wmsLayer34 = new ol.layer.Tile({title:'Lotes', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'lotes_imagen', FORMAT: 'image/png'},}) });
var wmsLayer35 = new ol.layer.Tile({title:'Manzanas', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'manzanas_1', FORMAT: 'image/png'},}) });
var wmsLayer36 = new ol.layer.Tile({title:'Edificaciones', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'edificaciones_p1', FORMAT: 'image/png'},}) });
var wmsLayer37 = new ol.layer.Tile({title:'Construcciones propiedad horizontal', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'v_construcciones_ph', FORMAT: 'image/png'},}) });
var wmsLayer38 = new ol.layer.Tile({title:'Construcciones', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'v_construcciones_grafico', FORMAT: 'image/png'},}) });
var wmsLayer39 = new ol.layer.Tile({title:'Lotes tipo', visible: false, source: new ol.source.TileWMS({url: 'http://localhost:8080/geoserver/atacames/wms', params: {LAYERS: 'lotes_tipo', FORMAT: 'image/png'},}) });
var osmLayer = new ol.layer.Tile({title:'OSM', type: 'base', source: new ol.source.OSM()});
var layerBing = new ol.layer.Tile({title:'Bing', type: 'base', source: new ol.source.BingMaps({key: 'z61dHHt7xvI6cWvb3tLI~s3pUt8qnsMvvxnC8vai5ow~AmBQctSswHZYTwsRfzX7yKz-c6zxxNomm1JEx7bzprcpDB3jNQ6iY43ijsnzOpmO',imagerySet:'AerialWithLabels'})});
var group1 = new ol.layer.Group({title:'Capas Base', layers: [vectorLayer, osmLayer, layerBing],});
var group2 = new ol.layer.Group({title:'Información Temática', layers: [wmsLayer3,wmsLayer4,wmsLayer5,wmsLayer6,wmsLayer7,wmsLayer8,wmsLayer9,wmsLayer10,wmsLayer11,wmsLayer12,wmsLayer13,wmsLayer14,],});
var group3 = new ol.layer.Group({title:'Riesgos', layers: [wmsLayer15,wmsLayer16,wmsLayer17,wmsLayer18,wmsLayer19,],});
var group4 = new ol.layer.Group({title:'Contribución Especial de Mejoras', layers: [wmsLayer20,wmsLayer21,wmsLayer22,wmsLayer23,],});
var group5 = new ol.layer.Group({title:'Información Base', layers: [wmsLayer24,wmsLayer25,wmsLayer26,wmsLayer27,wmsLayer28,wmsLayer29,wmsLayer30,],});
var group6 = new ol.layer.Group({title:'Catastro', layers: [wmsLayer31,wmsLayer32,wmsLayer33,wmsLayer34,wmsLayer35,wmsLayer36,wmsLayer37,wmsLayer38,wmsLayer39,],});
map.addLayer(group1);
map.addLayer(group2);
map.addLayer(group3);
map.addLayer(group4);
map.addLayer(group5);
map.addLayer(group6);
map.addControl(new ol.control.OverviewMap({layers: [new ol.layer.Tile(wmsLayer2.getProperties())],}));
var layerSwitcher = new ol.control.LayerSwitcher ({ 
    tipLabel: 'Leyenda'
});
map.addControl(layerSwitcher);
map.on('singleclick', function(evt) { document.getElementById('info').innerHTML = ''; var viewResolution = vista.getResolution(); var url= wmsLayer5.getSource().getFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:32717', {'INFO_FORMAT': 'text/html'}); if (url) document.getElementById('info').data = url; });