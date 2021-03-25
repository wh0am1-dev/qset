let idx = 0

const DIRECTIONS = {
  PREV: 0,
  NEXT: 1,
  RND: 2
}

const liftTheVeil = () => {
  idx = 0
  toggleAudio()
  $('#qcontent').addClass('tj')
  $('#quote').removeClass('maya')
}

const getTransform = (trans, scale, dir) => {
  if (dir === DIRECTIONS.RND) return `scale(${scale * 0.025 + 0.975})`
  return `translate(${trans * 16 * (dir === DIRECTIONS.PREV ? -1 : 1)}px)`
}

const switchQuote = (dir = DIRECTIONS.RND) => {
  if ($('#quote').is(':animated')) $('#quote').clearQueue().stop()
  if ($('html').is(':animated')) $('html').clearQueue().stop()

  scrollContent()
  $('#quote').animate(
    {
      opacity: 0
    },
    {
      duration: 150,
      easing: 'swing',
      step: now => $('#quote').css('transform', getTransform(now - 1, now, dir)),
      complete: () => {
        if ($('#quote').hasClass('maya')) liftTheVeil()

        $('#qcontent').html(quotes[idx].quote)
        $('#qtitle, #qtitlem').html(`${idx}. ${quotes[idx].author}<br>${quotes[idx].date}`)

        $('#quote').animate(
          {
            opacity: 1
          },
          {
            duration: 150,
            easing: 'swing',
            step: now => $('#quote').css('transform', getTransform(1 - now, now, dir))
          }
        )
      }
    }
  )
}

const nextQuote = () => {
  if (++idx >= quotes.length) idx = 0
  switchQuote(DIRECTIONS.NEXT)
  nextColor()
}

const prevQuote = () => {
  if (--idx < 0) idx = quotes.length - 1
  switchQuote(DIRECTIONS.PREV)
  prevColor()
}

const rndQuote = () => {
  const pre = idx
  while (pre === idx) idx = Math.floor(Math.random() * Math.floor(quotes.length))
  switchQuote()
  rndColor()
}

const goto = i => {
  idx = i.clamp(0, quotes.length - 1)
  switchQuote()
  rndColor()
}
