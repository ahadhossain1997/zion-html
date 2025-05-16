"use strict";

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
  ZION  PORTFOLIO SLIDER JS INIT
  --------------------------------------------------------------*/

  var p_slider_data = $('.zion-t-slider-init');
  if (p_slider_data.is_exist()) {
    p_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1399,
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
  }
  $(window).on("resize", function () {}); // end window resize

  /*===========================================
      =    On Load Function      =
  =============================================*/
  $(window).on("load", function () {
    preloader();
  });

  /*===========================================
      =    Preloader      =
  =============================================*/
  function preloader() {
    $('.preloader').delay(0).fadeOut();
  }
  ;
})(jQuery);