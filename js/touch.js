$(() => {
  if (isMobile()) {
    $.event.special.tap.emitTapOnTaphold = false
    $('#quote-title-touch').on('tap', nextColor)
    $('#quote-title-touch').on('taphold', rndQuote)
    $('#quote-title-touch').on('swipeleft', nextQuote)
    $('#quote-title-touch').on('swiperight', prevQuote)
    $('#quote-title-touch').on('contextmenu', e => e.preventDefault())
  }
})
