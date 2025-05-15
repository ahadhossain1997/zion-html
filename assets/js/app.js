"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  $(function () {}); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  zion PORTFOLIO MASONAY FILTER JS INIT
  ------------------------------------------------------------*/

  var zion_filter_gallery = $('#zion-portfolio-grid');
  if (zion_filter_gallery.is_exist()) {
    var $container = $(zion_filter_gallery),
      colWidth = function colWidth() {
        var w = $container.width(),
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum = 2;
        } else if (w > 900) {
          columnNum = 2;
        } else if (w > 1200) {
          columnNum = 1;
        } else if (w > 450) {
          columnNum = 1;
        } else if (w > 385) {
          columnNum = 1;
        }
        columnWidth = Math.floor(w / columnNum);
        $container.find('.collection-grid-item').each(function () {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css({
            width: width
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function isotope() {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.zion-portfolio-menu .option-set'),
      $optionLinks = $optionSets.find('li');
    $optionLinks.click(function () {
      var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[key] = value;
      if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
        // changes in layout modes need extra logic
        changeLayoutMode($this, options);
      } else {
        // creativewise, apply new options
        $container.isotope(options);
      }
      return false;
    });
  }

  /*--------------------------------------------------------------
  ZION COUNTER JS INIT
  --------------------------------------------------------------*/

  var stats = document.querySelectorAll(".zion-counter-data");
  stats.forEach(function (stat) {
    // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
    var patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
    var time = 1000;
    var result = _toConsumableArray(patt.exec(stat.textContent));
    var fresh = true;
    var ticks;

    // Remove first full match from result array (we dont need the full match, just the individual match groups).
    result.shift();
    // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
    result = result.filter(function (res) {
      return res != null;
    });
    while (stat.firstChild) {
      stat.removeChild(stat.firstChild);
    }
    var _iterator = _createForOfIteratorHelper(result),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var res = _step.value;
        if (isNaN(res)) {
          stat.insertAdjacentHTML("beforeend", "<span>".concat(res, "</span>"));
        } else {
          for (var i = 0; i < res.length; i++) {
            stat.insertAdjacentHTML("beforeend", "<span data-value=\"".concat(res[i], "\">\n\t\t\t\t\t\t<span>&ndash;</span>\n\t\t\t\t\t\t").concat(Array(parseInt(res[i]) + 1).join(0).split(0).map(function (x, j) {
              return "\n\t\t\t\t\t\t\t<span>".concat(j, "</span>\n\t\t\t\t\t\t");
            }).join(""), "\n\t\t\t\t\t</span>"));
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    ticks = _toConsumableArray(stat.querySelectorAll("span[data-value]"));
    var activate = function activate() {
      var top = stat.getBoundingClientRect().top;
      var offset = window.innerHeight * 0.8;
      setTimeout(function () {
        fresh = false;
      }, time);
      if (top < offset) {
        setTimeout(function () {
          var _iterator2 = _createForOfIteratorHelper(ticks),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var tick = _step2.value;
              var dist = parseInt(tick.getAttribute("data-value")) + 1;
              tick.style.transform = "translateY(-".concat(dist * 100, "%)");
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }, fresh ? time : 0);
        window.removeEventListener("scroll", activate);
      }
    };
    window.addEventListener("scroll", activate);
    activate();
  });

  /*--------------------------------------------------------------
  TECHIN TOOGLE BUTTON JS INIT
  --------------------------------------------------------------*/

  $(document).ready(function () {
    $(".toggle-button").change(function () {
      toggle(this.checked);
    });

    // Uncomment this to disaplay monthly on page load
    toggle(false);
    function toggle(checked) {
      $(".toggle-button").prop('checked', checked);
      if (checked) {
        $('.coreMonthlyPrice, .proMonthlyPrice').show();
        $('.coreAnnuallyText, .coreAnnuallyPrice, .proAnnuallyPrice').hide();
      } else {
        $('.coreMonthlyPrice,.proMonthlyPrice').hide();
        $('.coreAnnuallyText,.coreAnnuallyPrice, .proAnnuallyPrice').show();
      }
    }
  });

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

  /*--------------------------------------------------------------
  FLOWTO PRICING TABLE JS INIT
  ------------------------------------------------------------*/
  // Table BTN Trigger
  $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
    console.log($(e.target).parent().parent().hasClass("monthly-active"));
    $(e.target).toggleClass("clicked");
    if ($(e.target).parent().parent().hasClass("monthly-active")) {
      $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
    } else {
      $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
    }
  });
  $("[data-pricing-trigger]").on("click", function (e) {
    $(e.target).addClass("active").siblings().removeClass("active");
    var target = $(e.target).attr("data-target");
    console.log($(target).attr("data-value-active") == "monthly");
    if ($(target).attr("data-value-active") == "monthly") {
      $(target).attr("data-value-active", "yearly");
    } else {
      $(target).attr("data-value-active", "monthly");
    }
  });
})(jQuery);