$(document).ready(function(){

$('#map_addresses').gMap({
	address: "UnLtd Hyderabad, Banjara Hills",
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
			address: "UnLtd Hyderabad, H.No.8-2-326/A/2/A, Road No.3, Banjara Hills, Hyderabad 500034. ",
			popup: true
		}
		]
	});
	});