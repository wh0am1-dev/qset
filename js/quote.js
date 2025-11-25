let idx = 0

const DIRECTIONS = {
  PREV: 0,
  NEXT: 1,
  RND: 2
}

const liftTheVeil = () => {
  idx = 0
  toggleAudio()
  $('#quote-content').addClass('tj')
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

        $('#quote-content').html(quotes[idx].quote)
        $('#quote-title, #quote-title-touch').html(
          `${idx}. ${quotes[idx].title}<br><span class="f5 f4-m f3-l">${quotes[idx].author}, ${quotes[idx].date}</span>`
        )

        if (dir === DIRECTIONS.NEXT) nextColor()
        else if (dir === DIRECTIONS.PREV) prevColor()
        else rndColor()

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
}

const prevQuote = () => {
  if (--idx < 0) idx = quotes.length - 1
  switchQuote(DIRECTIONS.PREV)
}

const rndQuote = () => {
  const pre = idx
  while (pre === idx) idx = Math.floor(Math.random() * Math.floor(quotes.length))
  switchQuote()
}

const goto = i => {
  idx = i.clamp(0, quotes.length - 1)
  switchQuote()
}
