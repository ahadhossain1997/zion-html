"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  ZION HEADER TRIGER JS INIT
  ZION HEADER STICKY MENU JS INIT
  ZION PRELOADER JS INIT
  ZION PROGRES CIRCLE JS INIT
  ZION CTA SLIDER JS INIT
  ZION CTA SLIDER JS INIT2
  ZION TESTIMONIAL JS INIT
  ZION HOVER REVEAL START JS INIT
  ZION AOS ANIMATION JS INIT
  ZION BRAND JS INIT
  ZION BRAND JS INIT2
  ZION TAB SLIDER JS INIT
  ZION PORTFOLIO JS INIT
  ZION MENU SIDEBAR JS INIT
  ZION IMAGE EXPAND JS INIT
  ZION TESTIMONA JS INIT2
  ZION MAP JS INIT
  END IMAGE SCROLL ROTATE JS INIT
  ZION GSAP IMAGE ANIMATION JS INIT
  
  
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
  ZION PROGRES CIRCLE JS INIT
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
  ZION CTA SLIDER JS INIT2
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

  /*--------------------------------------------------------------
  ZION TESTIMONIAL JS INIT
  --------------------------------------------------------------*/
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

  // ZION HOVER REVEAL START JS INIT
  var hoverItem = document.querySelectorAll(".zion-hover-reveal-item");
  function moveImage(e, hoverItem, index) {
    var item = hoverItem.getBoundingClientRect();
    var x = e.clientX - item.x;
    var y = e.clientY - item.y;
    if (hoverItem.children[index]) {
      hoverItem.children[index].style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  }
  hoverItem.forEach(function (item, i) {
    item.addEventListener("mousemove", function (e) {
      setInterval(moveImage(e, item, 1), 50);
    });
  });

  /*--------------------------------------------------------------
  ZION AOS ANIMATION JS INIT
  --------------------------------------------------------------*/
  AOS.init({
    once: true // Ensure animations can trigger multiple times
  });

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
  ZION BRAND JS INIT2
  --------------------------------------------------------------*/
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
  ZION TAB SLIDER JS INIT
  --------------------------------------------------------------*/
  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.zion-tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

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
  ZION MENU SIDEBAR JS INIT
  --------------------------------------------------------------*/
  $(".zion-header-barger").on("click", function (e) {
    $(".zion-sidemenu-column2, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".zion-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".zion-sidemenu-column2, .offcanvas-overlay").removeClass("active");
  });

  /*--------------------------------------------------------------
  ZION IMAGE EXPAND JS INIT
  --------------------------------------------------------------*/

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

  /*--------------------------------------------------------------
  ZION TESTIMONA JS INIT2
  --------------------------------------------------------------*/

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
  ZION MAP JS INIT
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
      = ZION IMAGE SCROLL ROTATE JS INIT      =
  =============================================*/

  var swiper = new Swiper('.zion-about-thumb-slider', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    infinite: true,
    coverflow: {
      rotate: 0,
      stretch: 3,
      depth: 600,
      modifier: 1,
      slideShadows: false
    }
  });

  /*===========================================
      =    ZION GSAP IMAGE ANIMATION JS INIT      =
  =============================================*/

  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".zion-about-animation-wraper",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });
  tl.to("#image-tl", {
    x: "-90vw",
    y: "-90vh",
    rotation: -15
  }, 0);
  tl.to("#image-tr", {
    x: "80vw",
    y: "-80vh",
    rotation: 15
  }, 0);
  tl.to("#image-bl", {
    x: "-75vw",
    y: "80vh",
    rotation: -15
  }, 0);
  tl.to("#image-br", {
    x: "75vw",
    y: "80vh",
    rotation: 15
  }, 0);
  tl.from(".text-content", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5
  }, 0);

  /*===========================================
      =    ZION IMAGE SCROLL ROTATE JS INIT      =
  =============================================*/

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box", {
    rotation: -15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box2", {
    rotation: 15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });
  gsap.to(".box4", {
    scrollTrigger: {
      trigger: ".image-container",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    rotate: -30
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box5", {
    rotation: 15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });
  gsap.to(".box6", {
    rotation: -10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box7", {
    rotation: 10,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });

  /*===========================================
      =    Preloader      =
  =============================================*/
  function preloader() {
    $('.preloader').delay(0).fadeOut();
  }
  ;
})(jQuery);

// add thumb anim