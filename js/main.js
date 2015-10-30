$('a[href*=#]').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
		if ($('nav').hasClass('open')) {

			$('nav').slideUp().removeClass('open');

		}
		;
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body').animate({
				scrollTop: targetOffset
			}, 800);
			return false;
		}
	}
});

$('.btn-responsive-menu').click(function () {
	var $nav = $('nav');
	if ($nav.hasClass('open')) {
		$nav.slideUp().removeClass('open');
	} else {
		$nav.slideDown().addClass('open');
	}
});

google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
	var mapOptions = {
		center: new google.maps.LatLng(44.494551, 11.238763),
		zoom: 15,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		scaleControl: true,
		scrollwheel: false,
		panControl: true,
		streetViewControl: true,
		draggable: true,
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	new google.maps.Marker({
		icon: 'https://mapbuildr.com/assets/img/markers/default.png',
		position: new google.maps.LatLng(44.495823272909256, 11.238436236770667),
		map: map,
		title: "Yoox Net-a-Porter Group Headquarters"
	});
}

/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function ($) {

	function init() {

		var overlay = document.querySelector('.md-overlay');

		[].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {

			var $modal = $('#' + el.getAttribute('data-modal')),
				$close = $modal.find('.md-close'),
				$document = $(document),
				$el = $(el);

			function removeModal(hasPerspective) {
				$modal.removeClass('md-show');

				if (hasPerspective) {
					$document.removeClass('md-perspective');
				}
			}

			function removeModalHandler() {
				removeModal($(el).hasClass('md-setperspective'));
			}

			$el.on('click', function () {
				$modal.addClass('md-show');
				overlay.removeEventListener('click', removeModalHandler);
				overlay.addEventListener('click', removeModalHandler);

				if ($el.hasClass('md-setperspective')) {
					setTimeout(function () {
						$document.addClass('md-perspective');
					}, 25);
				}
			});

			$close.on('click', function (ev) {
				ev.stopPropagation();
				removeModalHandler();
			});

		});

	}

	init();

})(jQuery);