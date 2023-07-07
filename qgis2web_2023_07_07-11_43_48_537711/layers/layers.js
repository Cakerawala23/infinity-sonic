var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_casepoint_2 = new ol.format.GeoJSON();
var features_casepoint_2 = format_casepoint_2.readFeatures(json_casepoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casepoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casepoint_2.addFeatures(features_casepoint_2);
var lyr_casepoint_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_casepoint_2, 
                style: style_casepoint_2,
                interactive: true,
                title: '<img src="styles/legend/casepoint_2.png" /> case point'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_casepoint_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_casepoint_2];
lyr_building_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'bil org': 'bilangan orang', 'Material': 'jenis', 'Income': 'pendapatan', });
lyr_casepoint_2.set('fieldAliases', {'id': 'id', 'x': 'x', 'y': 'y', 'gender': 'jantina', 'year': 'tahun', 'week': 'minggu', 'child': 'anak-anak ', 'income': 'pendapatan', 'house': 'jenis rumah', 'education': 'pendidikan', });
lyr_building_1.set('fieldImages', {'id': 'Hidden', 'nama': 'Hidden', 'bil org': 'TextEdit', 'Material': 'TextEdit', 'Income': 'TextEdit', });
lyr_casepoint_2.set('fieldImages', {'id': 'Hidden', 'x': 'Hidden', 'y': 'Hidden', 'gender': 'TextEdit', 'year': 'TextEdit', 'week': 'TextEdit', 'child': 'TextEdit', 'income': 'TextEdit', 'house': 'TextEdit', 'education': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'bil org': 'no label', 'Material': 'no label', 'Income': 'no label', });
lyr_casepoint_2.set('fieldLabels', {'gender': 'inline label', 'year': 'inline label', 'week': 'inline label', 'child': 'inline label', 'income': 'inline label', 'house': 'inline label', 'education': 'inline label', });
lyr_casepoint_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});