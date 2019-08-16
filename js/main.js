var $title = $('.js-title');
var copy   = '.js-copy';

$('.child__copy--open').hide();

//
// slide nav out and give active state
//
$title.on('click', function() {
  var $element = $(this);
  triggerAccordian($element);
  return false;
});

function triggerAccordian($element){

  // highlight the nav text green if active
  if($element.hasClass('parent__title')) {

    if($element.hasClass('parent--active')){
      $element.removeClass('parent--active');
    } else {
      $title.removeClass('child--active');
      $(copy).hide();
      $('.parent__title').not($element).removeClass("parent--active");
      $element.addClass('parent--active');
    }

  // highlight the nav text green if active
  } else {

    if($element.hasClass('child--active')){
      $element.removeClass('child--active');
    } else {
      $('.child__title').not($element).removeClass("child--active");
      $element.addClass('child--active');
    }

  }

  // Toggle accordian
  $element.next(copy).slideToggle();
  $element.parent().siblings().children().next().slideUp();
  return false;
}

