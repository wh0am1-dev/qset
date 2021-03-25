const scrollHero = (speed = 1) => {
  if (!$('html').is(':animated')) {
    $('html').clearQueue().stop()
    $('html').animate(
      {
        scrollTop: 0
      },
      150 / speed,
      'swing',
      () => {}
    )
  }
}

const scrollContent = (speed = 1) => {
  if (!$('html').is(':animated')) {
    $('html').clearQueue().stop()
    $('html').animate(
      {
        scrollTop: $('#content').offset().top
      },
      150 / speed,
      'swing',
      () => {}
    )
  }
}
