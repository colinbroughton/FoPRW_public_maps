var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Working_bee_location_1 = new ol.format.GeoJSON();
var features_Working_bee_location_1 = format_Working_bee_location_1.readFeatures(json_Working_bee_location_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Working_bee_location_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Working_bee_location_1.addFeatures(features_Working_bee_location_1);
var lyr_Working_bee_location_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Working_bee_location_1, 
                style: style_Working_bee_location_1,
                popuplayertitle: 'Working_bee_location',
                interactive: true,
                title: '<img src="styles/legend/Working_bee_location_1.png" /> Working_bee_location'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Working_bee_location_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Working_bee_location_1];
lyr_Working_bee_location_1.set('fieldAliases', {'fid': 'fid', });
lyr_Working_bee_location_1.set('fieldImages', {'fid': '', });
lyr_Working_bee_location_1.set('fieldLabels', {'fid': 'no label', });
lyr_Working_bee_location_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});