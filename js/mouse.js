var mousewheelEvent = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';

$(function () {
  $('html').on(mousewheelEvent, function(e) {
    if ($('html').is(':animated'))
      e.preventDefault();

    var evt = window.event || e;
    evt = evt.originalEvent ? evt.originalEvent : evt;
    var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;

    if (delta > 0) { // scroll up
      if ($(window).scrollTop() <= $(window).height())
        scrollHero(500);
    } else { // scroll down
      if ($(window).scrollTop() < $(window).height())
        scrollContent(500);
    }
  });

  $('#quote').on('click', function () {
    rndQuote();
  });

  $('#logo').on('click', function () {
    bipbop();
  });

  $('.fa-heart').on('click', function () {
    console.log('ouch !');
  });
});
