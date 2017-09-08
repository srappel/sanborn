var map = L.map('map', {
  center: [43.02, -87.8],
  zoom: 12,
}).addLayer(new L.TileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"));



console.log(volumeData);


function style(feature) {
  return {
		stroke: "#571d12",
		fillColor: "#2b3e69",
		color: "white",
		weight: .5,
		fillOpacity:.75
  };
}


L.geoJson(volumeData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);



function onEachFeature(feature, layer) {
  // layer.on('click', function(e) {
  //   center(feature, layer);
  // });
  var label = feature.properties.Vol.toString();
 layer.bindTooltip(label, { 'permanent': true });
}






// function center (feature, layer){
// 	var polygonCenter = layer.getBounds().getCenter();
//
// 	// e.g. using Leaflet.label plugin
// 	L.marker(polygonCenter)
// 	    .bindLabel(feature.properties['Vol'], { noHide: true })
// 	    .addTo(map);
//
// }
