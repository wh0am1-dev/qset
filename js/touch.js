$(() => {
  if (isMobile()) {
    $.event.special.tap.emitTapOnTaphold = false
    // $('#content').on('tap', rndQuote)
    // $('#content').on('taphold', nextColor)
    $('#content').on('swipeleft', nextQuote)
    $('#content').on('swiperight', prevQuote)
  }
})
