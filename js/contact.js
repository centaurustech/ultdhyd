$(document).ready(function(){

$('#map_addresses').gMap({
	address: "UnLtd Hyderabad",
	zoom: 15,
	arrowStyle: 2,
	controls: {
       panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false
    },

		markers:[
		{
			address: "UnLtd Hyderabad",
			popup: false
		}
		]
	});
	});