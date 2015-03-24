/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	// Activates the Responsive menu
	$('.top-menu').mobileMenu({
		defaultText: 'Navigation',
		className: 'select-menu',
		subMenuDash: '&ndash;'
	});

	$('.lightbox-popup').magnificPopup({
		type: 'image',
		gallery:{enabled:true}

		// other options
	});
	
	// Owl Carousels
	$("#owl-example").owlCarousel({
		navigation : true,
		navigationText : ["",""],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		items : 4
	});

	$("#recent-projects1").owlCarousel({
		navigation : true,
		navigationText : ["",""],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,1],
		itemsTablet : [550,1],
		itemsTabletSmall : [550,1],
		itemsMobile : [550,1],
		singleItem : false,
		itemsScaleUp : false

	});

	$("#client-content").owlCarousel({
		navigation : true,
		navigationText : ["",""],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		items : 5
	});

	$("#quote1-content").owlCarousel({

		navigation : true,
		navigationText : ["",""],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		items : 2

	});

	$("#team-content").owlCarousel({

		navigation : true,
		navigationText : ["",""],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		items : 3

	});

	// Accordion
	$('.akordeon').akordeon();

	// Flickrfeed
	$('#flickr').jflickrfeed({
		limit: 6,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});

	// scroll body to 0px on click
	$('.back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Tabs
	$('#myTab a:first').tab('show');

	$(window).load(function(){
		$('#quoteslider').flexslider({
			animation: "fade",
			controlNav: false,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	$(window).load(function(){
		$('#contentslider').flexslider({
			animation: "fade",
			controlNav: false,   
			slideshow: false,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	$(window).load(function(){
		$('#small-slider').flexslider({
			animation: "slide",
			controlNav: true,
			directionNav:false,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	$(window).load(function(){
		$('#psingle-slider').flexslider({
			animation: "slide",
			controlNav: true,
			directionNav:true,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	$(window).load(function(){
		$('#post-slider').flexslider({
			animation: "slide",
			controlNav: true,
			directionNav:true,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	$(window).load(function(){
		$('#featured-shop').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav:true,
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});


	$(window).load(function(){
		$('#thumb-slider').flexslider({
			animation: "slide",
			directionNav:false,
			controlNav: "thumbnails",
			start: function(){
				$('body').removeClass('loading');
			}
		});
	});

	// Isotope
	$(window).load(function(){
		/* global changeLayoutMode: false */
		var $container = $('#folio');
		$container.isotope({
			itemSelector : '.folio-item'
		});
		var $optionSets = $('#portfolio .folio-filter'),
			$optionLinks = $optionSets.find('a');
		$optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
				return false;
			}
			var $optionSet = $this.parents('.folio-filter');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
		// make option object dynamically, i.e. { filter: '.my-filter-class' }
		var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
			
		// parse 'false' as false boolean
		value = value === 'false' ? false : value;
		options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			changeLayoutMode( $this, options );
		} else {
			// otherwise, apply new options
			$container.isotope( options );
		}
		return false;
		});

	});
	
	// Vertical Tabs
	$("#verticalTabs").verticalTabs().show();

	// Twitterfeed
	$('.tweet').tweet({
		username: "envato",
		modpath: 'tfeed/',
		count: 1,
		loading_text: 'loading twitter feed...',
	});

	var y;
	// slider
	$("#sliderRange")
	.slider({
		range: true,
		min: 240,
		max: 360,
		step: 1,
		values: [250, 350],
		slide: function(event, ui) {
			var price1 = ui.values[0];
			var price2 = ui.values[1];
			$("#price1")
			.val("\u20ac" + price1);
			$("#price2")
			.val("\u20ac" + price2);
			y = event;
		}
	});
	$('#price1')
	.bind('keyup', function() {
		var from = $(this)
		.val();
		var to = $('#price2')
		.val();
		$('#sliderRange')
		.slider('option', 'values', [from, to]);
	});
	$('#price2')
	.bind('keyup', function() {
		var from = $('#price1')
		.val();
		var to = $(this)
		.val();
		$('#sliderRange')
		.slider('option', 'values', [from, to]);
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

});
