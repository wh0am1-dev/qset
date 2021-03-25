const mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel'

$(() => {
  // $('html').on(mousewheelEvent, e => {
  //   if ($('html').is(':animated')) e.preventDefault()
  //   let evt = window.event || e
  //   evt = evt.originalEvent ? evt.originalEvent : evt
  //   const delta = evt.detail ? evt.detail * -40 : evt.wheelDelta
  //   if (delta > 0) {
  //     // scroll up
  //     if ($(window).scrollTop() <= $(window).height()) scrollHero(2)
  //   } else {
  //     // scroll down
  //     if ($(window).scrollTop() < $(window).height()) scrollContent(2)
  //   }
  // })

  $('#logo').on('click', bipbop)

  $('.fa-heart').on('click', () => console.log('ouch !'))
})
