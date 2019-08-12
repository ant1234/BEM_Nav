var $parent_title = $('.js-title');
var parent_copy   = '.js-copy';

var $child_title = $('.js-child-title');
var child_copy   = '.js-child-copy';

$('.child__copy').hide();

$parent_title.click(function (e) {

  $('.js-title').removeClass('parent-active');
  $(this).next(parent_copy).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  $(this).toggleClass('parent-active');
  e.stopPropagation();
  return false;

});

$child_title.click(function (e) {

  $('.js-child-title').removeClass('child-active');
  $(this).next(child_copy).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  $(this).toggleClass('child-active');
  e.stopPropagation();
  return false;

});
