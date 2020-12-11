$(() => {
  $.event.special.tap.emitTapOnTaphold = false
  $('#quote').on('tap', rndQuote)
  $('#quote').on('taphold', nextColor)
  $('#quote').on('swipeleft', nextQuote)
  $('#quote').on('swiperight', prevQuote)
})
