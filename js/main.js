var $parent_title = $('.js-title');
var parent_copy   = '.js-copy';
var $child_title = $('.js-child-title');
var child_copy   = '.js-child-copy';

$('.child__copy').hide();

//
// Slide and active state functionality for parent nav
//
$parent_title.click(function (e) {

  $(this).toggleClass('parent--active');
  $(this).next(parent_copy).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;

});

//
// Slide and active state functionality for child nav
//
$child_title.click(function (e) {

  $(this).toggleClass('child--active');
  $(this).next(child_copy).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;

});
