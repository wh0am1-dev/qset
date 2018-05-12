$(function () {
  $.event.special.tap.emitTapOnTaphold = false;

  $('#quote').on('tap', function () {
    rndQuote();
  });

  $('#quote').on('taphold', function () {
    nextColor();
  });

  $('#quote').on('swipeleft', function () {
    nextQuote();
  });

  $('#quote').on('swiperight', function () {
    prevQuote();
  });
});
