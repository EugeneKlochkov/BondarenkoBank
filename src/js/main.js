(function ($) {
    $(function () {
        new WOW().init();
        $('.language').on('click', function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $('.nav-item a').on('click', function () {
            var $this = $(this),
                i = $(this).data('tab');
            $this
                .addClass('active')
                .parent()
                .siblings()
                .find('a')
                .removeClass('active');
            $('.transfer__content div[data-tab=' + i + ']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.top-scroll').css('display', 'block');
            } else {
                $('.top-scroll').css('display', 'none');
            }
        });

        var w = $('html, body');
        $('.top-scroll').on('click', function () {
            w.animate({scrollTop: 0}, 500);
        });

        $('.nav-footer .nav-title').on('click', function () {
            var $this = $(this);
            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $this
                    .addClass('active')
                    .parent()
                    .siblings()
                    .find('.nav-title')
                    .removeClass('active');
            }
        });
        
    });
})(jQuery);

function initMap() {
    var container = $('#map')[0],
        content = $('#info-w').html(),
        coords = {lat: 48.7357900, lng: 37.5868365},
        image = './img/logo.png',
        styleSilver =  [
            {elementType: 'geometry', stylers: [{color: '#4a1570'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#fbfbfb'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#4a1570'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#c82367'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#eb2763'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#c42367'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#252dff'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#fbfbfb'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#fbfbfb'}]
            }
        ],
        map = new google.maps.Map(container, {
            center: coords,
            zoom: 12,
            styles: styleSilver,
            disableDefaultUI: true,
        }),
        marker = new google.maps.Marker({
            position: coords,
            map: map,
            //icon: image,
            animation: google.maps.Animation.DROP,
            //animation: google.maps.Animation.BOUNCE,
            title: 'Bango Bank'
        }),
        infowindow = new google.maps.InfoWindow({
            content: content
        });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    /*Центрирование маркера при изменении размера карты*/
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
}
