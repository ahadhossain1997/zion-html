"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  zion PRELOADER JS INIT
  zion HEADER TRIGER JS INIT
  zion HEADER STICKY MENU JS INIT
  zion MENU SIDEBAR JS INIT
  zion PROGRES CIRCLE JS INIT
  zion TSTIMONIAL SLIDER INIT
  zion PORTFOLIO MASONAY FILTER JS
  zion TAB CONTENT JS
  zion TOGGLE PASSOWRD JS INIT
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  /*--------------------------------------------------------------
  zion HEADER TRIGER JS INIT
  --------------------------------------------------------------*/
  $(".zion-header-triger").on("click", function (e) {
    $(".zion-sidemenu-column, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".zion-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".zion-sidemenu-column, .offcanvas-overlay").removeClass("active");
  });

  /*--------------------------------------------------------------
    zion STICKY MENU JS INIT
  --------------------------------------------------------------*/

  var lastScroll = 0;
  function sticky_header() {
    var header_hegith = $('header').innerHeight();
    var scroll = $(window).scrollTop();
    if (scroll > header_hegith && scroll > lastScroll) {
      $('header').addClass('hide-header');
    } else if (scroll < lastScroll) {
      $('header').removeClass('hide-header');
    }
    lastScroll = scroll;
  }
  $(function () {
    sticky_header();
  });
  window.onload = function () {
    sticky_header();
  };
  window.onscroll = function () {
    sticky_header();
  };
  window.onresize = function (event) {
    sticky_header();
  };
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 20) {
      $('#sticky-menu').addClass('sticky-menu');
    } else {
      $('#sticky-menu').removeClass('sticky-menu');
    }
  });

  /*--------------------------------------------------------------
  zion PROGRES CIRCLE JS INIT
  --------------------------------------------------------------*/

  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function updateProgress() {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });

  /*--------------------------------------------------------------
   ZION CTA SLIDER JS INIT
   --------------------------------------------------------------*/
  var t_slider = $('.zion-cta-slider-init');
  if (t_slider.is_exist()) {
    t_slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 13000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1024,
        settings: {
          speed: 8000 // override speed at this breakpoint
        }
      }, {
        breakpoint: 600,
        settings: {
          speed: 5000 // another override
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  ZION CTA SLIDER JS INIT
  --------------------------------------------------------------*/
  var t_slider2 = $('.zion-cta-slider-init2');
  if (t_slider2.is_exist()) {
    t_slider2.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 13000,
      rtl: true,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1024,
        settings: {
          speed: 8000 // override speed at this breakpoint
        }
      }, {
        breakpoint: 600,
        settings: {
          speed: 5000 // another override
        }
      }]
    });
  }
  var $carousel = $('.slick-slide-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  gsap.registerPlugin(ScrollTrigger);
  var revealContainers = document.querySelectorAll(".zion-p-thumb");
  revealContainers.forEach(function (container) {
    var image = container.querySelector("img");
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(container, {
      autoAlpha: 1
    });
    tl.from(container, 1.5, {
      xPercent: -70,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 70,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });

  /*--------------------------------------------------------------
  ZION AOS ANIMATION JS INIT
  --------------------------------------------------------------*/

  AOS.init({
    once: true // Ensure animations can trigger multiple times
  });

  /////////////////////////////////////////////////////
  var text_animation = gsap.utils.toArray(".move-anim");
  if (text_animation) {
    text_animation.forEach(function (splitTextLine) {
      var delay_value = 0.1;
      if (splitTextLine.getAttribute("data-delay")) {
        delay_value = splitTextLine.getAttribute("data-delay");
      }
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 85%",
          duration: 1.3,
          scrub: false,
          markers: false,
          toggleActions: "play none none none"
        }
      });
      var itemSplitted = new SplitText(splitTextLine, {
        type: "lines"
      });
      gsap.set(splitTextLine, {
        perspective: 400
      });
      itemSplitted.split({
        type: "lines"
      });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: delay_value,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    });
  }

  /*--------------------------------------------------------------
  ZION BRAND JS INIT
  --------------------------------------------------------------*/

  var i_slider_data = $('.zion-brand-slider-js-init');
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }
  /*--------------------------------------------------------------
  ZION TAB SLIDER JS INIT
  --------------------------------------------------------------*/
  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.zion-tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
  var i_slider_data = $('.zion-brand-slider-js-init2');
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      arrows: false,
      rtl: true,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  ZION WOW JS INIT
  --------------------------------------------------------------*/
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();

  /*--------------------------------------------------------------
  ZION PORTFOLIO JS INIT
  --------------------------------------------------------------*/

  var i_slider_data = $('.zion-portfolio-slider-js-init');
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      infinite: true,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  TEKUP MENU SIDEBAR JS INIT
  --------------------------------------------------------------*/
  $(".zion-header-barger").on("click", function (e) {
    $(".zion-sidemenu-column2, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".zion-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".zion-sidemenu-column2, .offcanvas-overlay").removeClass("active");
  });

  // img expand

  var wrappers = document.querySelectorAll(".zion-p-img-expand-wrap");
  var wrapArray = Array.from(wrappers);
  wrapArray.forEach(function (item) {
    var text = item.childNodes[1];
    item.addEventListener("mouseover", function () {
      wrapArray.filter(function (others) {
        if (others !== item) {
          others.classList.remove("expand");
        }
      });
      this.classList.add("expand");
      text.classList.add('active');
    });
    item.addEventListener("mouseout", function () {
      this.classList.remove("expand");
      text.classList.remove('active');
    });
  });
  $(window).on("resize", function () {}); // end window resize

  /*===========================================
      =    On Load Function      =
  =============================================*/
  $(window).on("load", function () {
    preloader();
    $(".mcs-horizontal").mCustomScrollbar({
      axis: "x",
      theme: "dark-thick",
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true
      },
      updateOnContentResize: true,
      scrollbarPosition: 'outside',
      scrollInertia: 200
    });
  });
  var t_slider = $('.zion-t-slider-init2');
  if (t_slider.is_exist()) {
    t_slider.slick(_defineProperty(_defineProperty(_defineProperty({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      infinite: true
    }, "autoplay", true), "speed", 1000), "lazyLoad", 'progressive'));
  }

  /*--------------------------------------------------------------
  zion MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'zion'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>zion' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  /*===========================================
      =    Preloader      =
  =============================================*/
  function preloader() {
    $('.preloader').delay(0).fadeOut();
  }
  ;
})(jQuery);