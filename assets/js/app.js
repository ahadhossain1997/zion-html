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
      breakpoint: 991,
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
  TEKUP MENU SIDEBAR JS INIT
  --------------------------------------------------------------*/
  $(".zion-header-barger").on("click", function (e) {
    $(".zion-sidemenu-column, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".zion-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".zion-sidemenu-column, .offcanvas-overlay").removeClass("active");
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
    t_slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      infinite: false,
      speed: 1000,
      lazyLoad: 'progressive'
    });
  }

  /*===========================================
      =    Preloader      =
  =============================================*/
  function preloader() {
    $('.preloader').delay(0).fadeOut();
  }
  ;
})(jQuery);