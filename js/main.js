(function () {
    var $nav = $('nav');
    $('a[href*=#]').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            $(this).parent()
                .addClass('active')
                .siblings()
                .removeClass('active');
            if ($nav.hasClass('open')) {
                $nav.slideUp().removeClass('open');
            }

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

    $(window).resize(function () {
        if (innerWidth > 768) {
            $nav.show();
        } else {
            $nav.hide();
        }
    });

    $('.btn-responsive-menu').click(function () {
        if ($nav.hasClass('open')) {
            $nav.slideUp().removeClass('open');
        } else {
            $nav.slideDown().addClass('open');
        }
    });

    $('.slideshow').cycle({
        fx:     'fade', 
        delay:  -2000 
    });
  
}());

(function () {
    google.maps.event.addDomListener(window, 'load', init);

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
            icon: './img/marker.png',
            position: new google.maps.LatLng(44.495823272909256, 11.238436236770667),
            map: map,
            title: "Yoox Net-a-Porter Group Headquarters"
        });
    }
}());

(function () {

    var overlay = document.querySelector('.md-overlay');

    $('.md-trigger').each(function () {
        var $this = $(this),
            $modal = $('#' + $this.attr('data-modal')),
            $close = $modal.find('.md-close'),
            $document = $(document);

        function removeModal(hasPerspective) {
            $modal.removeClass('md-show');

            if (hasPerspective) {
                $document.removeClass('md-perspective');
            }
        }

        function removeModalHandler() {
            removeModal($this.hasClass('md-setperspective'));
        }

        $this.on('click', function () {
            $modal.addClass('md-show');
            overlay.removeEventListener('click', removeModalHandler);
            overlay.addEventListener('click', removeModalHandler);

            if ($this.hasClass('md-setperspective')) {
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

})();