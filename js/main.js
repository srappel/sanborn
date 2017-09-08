//get leaflet map set-up
var map = L.map('map', {
  dragging: false,
  center: [43.045, -87.895],
  zoom: 12,
}).addLayer(new L.TileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"));

//set style for polygons
function style(feature) {
  return {
		stroke: "#571d12",
		fillColor: "#2b3e69",
		color: "white",
		weight: .5,
		fillOpacity:.75
  };
}

//click actions
function onEachFeature(feature, layer) {

  layer.on('click', function(e) {
    window.location = (feature.properties.Query);
  });
  var label = feature.properties.Vol.toString();
  layer.bindTooltip(label, { className: 'volumeTooltip', 'permanent': true });
}

//make a layer out of the data with style and click actions
L.geoJson(volumeData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);
