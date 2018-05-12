var amp = { v: 0.0 }

function toggleAudio() {
  if (amp.v >= 0.5) {
    $(amp).clearQueue().stop();
    $(amp).animate({ v: 0.0 }, {
      duration: 500,
      easing: 'swing',
      step: function(val) {
        $('#bgm').prop('volume', val);
      },
      complete: function() {
        $('#bgm').trigger('pause');
      }
    });
  } else {
    $('#bgm').trigger('play');
    $(amp).clearQueue().stop();
    $(amp).animate({ v: 1.0 }, {
      duration: 500,
      easing: 'swing',
      step: function(val) {
        $('#bgm').prop('volume', val);
      }
    });
  }
}
