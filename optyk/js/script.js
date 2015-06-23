(function () {
	'use strict';
	
	function initialize() {
	  	var myLatlng = new google.maps.LatLng(50.8051819, 23.893465);
	  	//
	  	var myLatlng2 = new google.maps.LatLng(50.805529,23.893298);
	  	var mapProp = {
	    	center: myLatlng,
	   	 	zoom: 17,
	    	mapTypeId:google.maps.MapTypeId.ROADMAP
	  	};

	  	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		
		var marker = new google.maps.Marker({
			position: myLatlng2,
			map: map,
			title: 'Zakład Optyczny Agnieszka Koc'

		});

	}
	//load map
	google.maps.event.addDomListener(window, 'load', initialize);




}());
