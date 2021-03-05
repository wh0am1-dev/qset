const forbidden = [
  9, // tab
  13, // enter
  32 // space
  // 37, // left
  // 38, // up
  // 39, // right
  // 40  // down
]

const isForbidden = keyCode => {
  for (let i = 0; i < forbidden.length; i++) if (forbidden[i] == keyCode) return true
  return false
}

$(() => {
  $(window).on('keyup', e => {
    if (isForbidden(e.keyCode)) e.preventDefault()

    if (e.keyCode == 9 || e.keyCode == 13) {
      // tab/enter: open/close
      if (
        $(window).scrollTop() > $(window).height() / 2 &&
        $(window).scrollTop() <= $(window).height()
      )
        scrollHero(500)
      else scrollContent(500)
    } else if (e.key === 'j') {
      nextQuote() // j: next
    } else if (e.key === 'k') {
      prevQuote() // k: previous
    } else if (e.key === ' ') {
      rndQuote() // space: random
    } else if (e.key === 'm') {
      toggleAudio() // m: play/pause music
    } else if (e.key === 'h') {
      nextColor() // h: background
    } else {
      bipbop()
    }
  })

  $(window).on('keydown', e => {
    if (isForbidden(e.keyCode)) e.preventDefault()

    if (e.keyCode == 38) {
      // up
      if ($('html').is(':animated')) e.preventDefault()
      else if ($(window).scrollTop() <= $(window).height()) scrollHero(500)
    } else if (e.keyCode == 40) {
      // down
      if ($('html').is(':animated')) e.preventDefault()
      else if ($(window).scrollTop() < $(window).height()) scrollContent(500)
    }
  })

  $(window).on('keypress', e => isForbidden(e.keyCode) && e.preventDefault())
})
