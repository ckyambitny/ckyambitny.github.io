$(document).ready(function(){

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
	};

	var easing = 'easeInSine';

	
	$('.menu-icon, .menu-word').click(function () {
		
		$('.menu-list').slideToggle({
			start: function () {
				$('.active').slideUp({
					duration: 500,
					easing: easing,
				}).removeClass('active');

			},
			duration: 1000,
			easing: easing,
		
		});
	});

	$('.oferta-link').click(function () {
		
		$('.oferta').slideDown({
			start: function () {
				$(this).addClass('active');
				$('.menu-list').slideUp({
					duration: 500,
					easing: easing
				});
			},
			duration: 500,
			easing: easing
		});
		
	});

	$('.o-firmie-link').click(function() {
		$('.o-firmie').slideDown({
			start: function () {
				$('.menu-list').slideUp({
					duration: 500,
					easing: easing
				});
			},
			duration: 500,
			easing: easing,
			complete: function () {
				$(this).addClass('active');
			}	
		});
	});

	$('.kontakt-link').click(function () {
		$('.kontakt').slideDown({
			start: function () {
				initialize();
				$('.menu-list').slideUp({
					duration: 500,
					easing: easing
				});
			},
			duration: 500,
			easing: easing,
			complete: function () {
				$(this).addClass('active');
			}	
		});
	});




})