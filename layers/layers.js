var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_provinces_2 = new ol.format.GeoJSON();
var features_provinces_2 = format_provinces_2.readFeatures(json_provinces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provinces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provinces_2.addFeatures(features_provinces_2);
var lyr_provinces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provinces_2, 
                style: style_provinces_2,
                popuplayertitle: 'provinces',
                interactive: true,
                title: '<img src="styles/legend/provinces_2.png" /> provinces'
            });
var format_districts_3 = new ol.format.GeoJSON();
var features_districts_3 = format_districts_3.readFeatures(json_districts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districts_3.addFeatures(features_districts_3);
var lyr_districts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_districts_3, 
                style: style_districts_3,
                popuplayertitle: 'districts',
                interactive: true,
                title: '<img src="styles/legend/districts_3.png" /> districts'
            });
var format_landuse_4 = new ol.format.GeoJSON();
var features_landuse_4 = format_landuse_4.readFeatures(json_landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_4.addFeatures(features_landuse_4);
var lyr_landuse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_4, 
                style: style_landuse_4,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_4.png" /> landuse'
            });
var format_cities_5 = new ol.format.GeoJSON();
var features_cities_5 = format_cities_5.readFeatures(json_cities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cities_5.addFeatures(features_cities_5);
cluster_cities_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_cities_5
});
var lyr_cities_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_cities_5, 
                style: style_cities_5,
                popuplayertitle: 'cities',
                interactive: true,
                title: '<img src="styles/legend/cities_5.png" /> cities'
            });
var format_health_centre_6 = new ol.format.GeoJSON();
var features_health_centre_6 = format_health_centre_6.readFeatures(json_health_centre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_health_centre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_health_centre_6.addFeatures(features_health_centre_6);
cluster_health_centre_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_health_centre_6
});
var lyr_health_centre_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_health_centre_6, 
                style: style_health_centre_6,
                popuplayertitle: 'health_centre',
                interactive: true,
                title: '<img src="styles/legend/health_centre_6.png" /> health_centre'
            });
var format_roads_7 = new ol.format.GeoJSON();
var features_roads_7 = format_roads_7.readFeatures(json_roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_7.addFeatures(features_roads_7);
var lyr_roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_7, 
                style: style_roads_7,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_7.png" /> roads'
            });
var format_roads_cut_8 = new ol.format.GeoJSON();
var features_roads_cut_8 = format_roads_cut_8.readFeatures(json_roads_cut_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_cut_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_cut_8.addFeatures(features_roads_cut_8);
var lyr_roads_cut_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_cut_8, 
                style: style_roads_cut_8,
                popuplayertitle: 'roads_cut',
                interactive: true,
                title: '<img src="styles/legend/roads_cut_8.png" /> roads_cut'
            });
var format_towns_9 = new ol.format.GeoJSON();
var features_towns_9 = format_towns_9.readFeatures(json_towns_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_towns_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_towns_9.addFeatures(features_towns_9);
cluster_towns_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_towns_9
});
var lyr_towns_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_towns_9, 
                style: style_towns_9,
                popuplayertitle: 'towns',
                interactive: true,
                title: '<img src="styles/legend/towns_9.png" /> towns'
            });
var format_secondary_schools_10 = new ol.format.GeoJSON();
var features_secondary_schools_10 = format_secondary_schools_10.readFeatures(json_secondary_schools_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secondary_schools_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secondary_schools_10.addFeatures(features_secondary_schools_10);
cluster_secondary_schools_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_secondary_schools_10
});
var lyr_secondary_schools_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_secondary_schools_10, 
                style: style_secondary_schools_10,
                popuplayertitle: 'secondary_schools',
                interactive: false,
                title: '<img src="styles/legend/secondary_schools_10.png" /> secondary_schools'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_provinces_2.setVisible(true);lyr_districts_3.setVisible(true);lyr_landuse_4.setVisible(true);lyr_cities_5.setVisible(true);lyr_health_centre_6.setVisible(true);lyr_roads_7.setVisible(true);lyr_roads_cut_8.setVisible(true);lyr_towns_9.setVisible(true);lyr_secondary_schools_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr_provinces_2,lyr_districts_3,lyr_landuse_4,lyr_cities_5,lyr_health_centre_6,lyr_roads_7,lyr_roads_cut_8,lyr_towns_9,lyr_secondary_schools_10];
lyr_provinces_2.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'PROV_CODE': 'PROV_CODE', });
lyr_districts_3.set('fieldAliases', {'LOCAL_AUTH': 'LOCAL_AUTH', 'DISTRICT_N': 'DISTRICT_N', 'DIST_NAME_': 'DIST_NAME_', 'DIST_NM_LA': 'DIST_NM_LA', 'PROVINCEPC': 'PROVINCEPC', 'PROVNAMEFU': 'PROVNAMEFU', 'DISTRICTPC': 'DISTRICTPC', 'STATUS': 'STATUS', 'NOOFWARDS': 'NOOFWARDS', });
lyr_landuse_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'NAME': 'NAME', 'LANDTYPE': 'LANDTYPE', });
lyr_cities_5.set('fieldAliases', {'city': 'city', 'lon': 'lon', 'lat': 'lat', });
lyr_health_centre_6.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'NAME': 'NAME', 'FACILITY': 'FACILITY', 'LONGTUDE': 'LONGTUDE', 'LATITUDE': 'LATITUDE', 'F_ID': 'F_ID', });
lyr_roads_7.set('fieldAliases', {'ID': 'ID', });
lyr_roads_cut_8.set('fieldAliases', {'ID': 'ID', });
lyr_towns_9.set('fieldAliases', {'DD_LAT': 'DD_LAT', 'DD_LONG': 'DD_LONG', 'FULL_NAME_': 'FULL_NAME_', 'ADMIN2': 'ADMIN2', 'ADMIN3': 'ADMIN3', 'NGOS': 'NGOS', 'name': 'name', });
lyr_secondary_schools_10.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_provinces_2.set('fieldImages', {'PROVINCE': 'TextEdit', 'PROV_CODE': 'Range', });
lyr_districts_3.set('fieldImages', {'LOCAL_AUTH': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DIST_NAME_': 'TextEdit', 'DIST_NM_LA': 'TextEdit', 'PROVINCEPC': 'TextEdit', 'PROVNAMEFU': 'TextEdit', 'DISTRICTPC': 'TextEdit', 'STATUS': 'TextEdit', 'NOOFWARDS': 'TextEdit', });
lyr_landuse_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'NAME': 'TextEdit', 'LANDTYPE': 'TextEdit', });
lyr_cities_5.set('fieldImages', {'city': '', 'lon': '', 'lat': '', });
lyr_health_centre_6.set('fieldImages', {'DISTRICT': '', 'NAME': '', 'FACILITY': '', 'LONGTUDE': '', 'LATITUDE': '', 'F_ID': '', });
lyr_roads_7.set('fieldImages', {'ID': 'Range', });
lyr_roads_cut_8.set('fieldImages', {'ID': 'Range', });
lyr_towns_9.set('fieldImages', {'DD_LAT': '', 'DD_LONG': '', 'FULL_NAME_': '', 'ADMIN2': '', 'ADMIN3': '', 'NGOS': '', 'name': '', });
lyr_secondary_schools_10.set('fieldImages', {'ID': '', 'NAME': '', });
lyr_provinces_2.set('fieldLabels', {'PROVINCE': 'no label', 'PROV_CODE': 'no label', });
lyr_districts_3.set('fieldLabels', {'LOCAL_AUTH': 'no label', 'DISTRICT_N': 'no label', 'DIST_NAME_': 'no label', 'DIST_NM_LA': 'no label', 'PROVINCEPC': 'no label', 'PROVNAMEFU': 'no label', 'DISTRICTPC': 'no label', 'STATUS': 'no label', 'NOOFWARDS': 'no label', });
lyr_landuse_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'NAME': 'no label', 'LANDTYPE': 'no label', });
lyr_cities_5.set('fieldLabels', {'city': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_health_centre_6.set('fieldLabels', {'DISTRICT': 'no label', 'NAME': 'no label', 'FACILITY': 'no label', 'LONGTUDE': 'no label', 'LATITUDE': 'no label', 'F_ID': 'no label', });
lyr_roads_7.set('fieldLabels', {'ID': 'no label', });
lyr_roads_cut_8.set('fieldLabels', {'ID': 'no label', });
lyr_towns_9.set('fieldLabels', {'DD_LAT': 'no label', 'DD_LONG': 'no label', 'FULL_NAME_': 'no label', 'ADMIN2': 'no label', 'ADMIN3': 'no label', 'NGOS': 'no label', 'name': 'no label', });
lyr_secondary_schools_10.set('fieldLabels', {'ID': 'no label', 'NAME': 'no label', });
lyr_secondary_schools_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});