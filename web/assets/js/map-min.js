function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:12,center:destination,styles:[{featureType:"road",stylers:[{hue:"#5e00ff"},{saturation:-79}]},{featureType:"poi",stylers:[{saturation:-78},{hue:"#6600ff"},{lightness:-47},{visibility:"off"}]},{featureType:"road.local",stylers:[{lightness:22}]},{featureType:"landscape",stylers:[{hue:"#6600ff"},{saturation:-11}]},{},{},{featureType:"water",stylers:[{saturation:-65},{hue:"#1900ff"},{lightness:8}]},{featureType:"road.local",stylers:[{weight:1.3},{lightness:30}]},{featureType:"transit",stylers:[{visibility:"simplified"},{hue:"#5e00ff"},{saturation:-16}]},{featureType:"transit.line",stylers:[{saturation:-72}]},{}]}),t=new google.maps.InfoWindow({content:contentString,maxWidth:200}),s=new google.maps.Marker({position:destination,map:e,icon:{url:"https://images.vexels.com/media/users/3/131261/isolated/lists/b2e48580147ca0ed3f970f30bf8bb009-map-location-marker.png",scaledSize:new google.maps.Size(62,80)}});s.addListener("click",(function(){t.open(e,s)}))}