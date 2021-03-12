$(() => {
  if (isMobile()) {
    $.event.special.tap.emitTapOnTaphold = false
    $('#qtitlem').on('tap', nextColor)
    $('#qtitlem').on('taphold', rndQuote)
    $('#qtitlem').on('swipeleft', nextQuote)
    $('#qtitlem').on('swiperight', prevQuote)
    $('#qtitlem').on('contextmenu', e => e.preventDefault())
  }
})
