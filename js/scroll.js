function scrollHero(ms) {
  if (!$('html').is(':animated')) {
    $('html').clearQueue().stop();
    $('html').animate({
      scrollTop: 0
    }, ms, 'swing', function() {});
  }
}

function scrollContent(ms) {
  if (!$('html').is(':animated')) {
    $('html').clearQueue().stop();
    $('html').animate({
      scrollTop: $('#content').offset().top
    }, ms, 'swing', function() {});
  }
}
