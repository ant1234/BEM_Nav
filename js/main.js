var $title = $('.js-title');
var copy   = '.js-copy';

var $child_title = $('.js-child-title');
var child_copy   = '.js-child-copy';

$title.on('click', function() {

  $(this).next(copy).slideToggle();
  $(this).parent().siblings().children().next().toggleClass('active').slideUp();
  return false;

});

$child_title.on('click', function() {

  $(this).next(child_copy).slideToggle();
  $(this).parent().siblings().children().next().toggleClass('active').slideUp();
  return false;

});
