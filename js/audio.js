const amp = { v: 0.0 }

const toggleAudio = () => {
  if (amp.v >= 0.5) {
    $(amp).clearQueue().stop()
    $(amp).animate(
      { v: 0.0 },
      {
        duration: 500,
        easing: 'swing',
        step: val => $('#bgm').prop('volume', val),
        complete: () => $('#bgm').trigger('pause')
      }
    )
  } else {
    $('#bgm').trigger('play')
    $(amp).clearQueue().stop()
    $(amp).animate(
      { v: 1.0 },
      {
        duration: 500,
        easing: 'swing',
        step: val => $('#bgm').prop('volume', val)
      }
    )
  }
}
