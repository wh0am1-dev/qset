$(() => {
  if (isMobile()) {
    $.event.special.tap.emitTapOnTaphold = false
    $('#qtitlem').on('tap', nextColor)
    $('#qtitlem').on('taphold', nextColor)
    $('#qtitlem').on('swipeleft', nextQuote)
    $('#qtitlem').on('swiperight', prevQuote)
    $('#qtitlem').on('contextmenu', e => e.preventDefault())
  }
})
