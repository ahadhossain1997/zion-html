var Accordion = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;

  var links = this.el.find('.zion-faq-header');
  links.on('click', {
      el: this.el,
      multiple: this.multiple
  }, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
      $next = $this.next();

  $next.slideToggle();
  $this.parent().toggleClass('open');

  if (!e.data.multiple) {
      $el.find('.zion-faq-body').not($next).slideUp().parent().removeClass('open');
  };
}
var accordion = new Accordion($('.zion-faq-wrap1'), false);