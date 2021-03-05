let idx = 0

const liftTheVeil = () => {
  idx = 0
  toggleAudio()
  $('#qcontent').addClass('tj')
  $('#quote').removeClass('maya')
}

const switchQuote = () => {
  if ($('#quote').is(':animated')) $('#quote').clearQueue().stop()
  if ($('html').is(':animated')) $('html').clearQueue().stop()

  $('#quote').animate(
    {
      opacity: 0
    },
    250,
    'swing',
    () => {
      if ($('#quote').hasClass('maya')) liftTheVeil()

      scrollContent(250)
      $('#qtitle').html(idx + '. ' + quotes[idx].author + ', ' + quotes[idx].date)
      $('#qtitlem').html(idx + '. ' + quotes[idx].author + ', ' + quotes[idx].date)
      $('#qcontent').html(quotes[idx].quote)

      $('#quote').animate(
        {
          opacity: 1
        },
        250,
        'swing',
        () => {}
      )
    }
  )
}

const nextQuote = () => {
  if (++idx >= quotes.length) idx = 0
  switchQuote()
  nextColor()
}

const prevQuote = () => {
  if (--idx < 0) idx = quotes.length - 1
  switchQuote()
  prevColor()
}

const rndQuote = () => {
  const pre = idx
  while (pre === idx) idx = Math.floor(Math.random() * Math.floor(quotes.length))
  switchQuote()
  rndColor()
}
