var forbidden = [
  9,  // tab
  13, // enter
  32  // space
  // 37, // left
  // 38, // up
  // 39, // right
  // 40  // down
];

function isForbidden(keyCode) {
  for (var i = 0; i < forbidden.length; i++)
    if (forbidden[i] == keyCode)
      return true;
  return false;
}

$(function () {
  $(window).on('keyup', function(e) {
    if (isForbidden(e.keyCode))
      e.preventDefault();

    if (e.keyCode == 9 || e.keyCode == 13) { // tab/enter: open/close
      if ($(window).scrollTop() > $(window).height() / 2 && $(window).scrollTop() <= $(window).height())
        scrollHero(500);
      else
        scrollContent(500);
    } else if (e.key === 'j') { // j: next
      nextQuote();
    } else if (e.key === 'k') { // k: previous
      prevQuote();
    } else if (e.key === ' ') { // space: random
      rndQuote();
    } else if (e.key === 'm') { // m: play/pause music
      toggleAudio();
    } else if (e.key === 'h') { // h: background
      nextColor();
    } else {
      bipbop();
    }
  });

  $(window).on('keydown', function(e) {
    if (isForbidden(e.keyCode))
      e.preventDefault();

    if (e.keyCode == 38) { // up
      if ($('html').is(':animated'))
        e.preventDefault();
      else if ($(window).scrollTop() <= $(window).height())
        scrollHero(500);
    } else if (e.keyCode == 40) { // down
      if ($('html').is(':animated'))
        e.preventDefault();
      else if ($(window).scrollTop() < $(window).height())
        scrollContent(500);
    }
  });

  $(window).on('keypress', function(e) {
    if (isForbidden(e.keyCode))
      e.preventDefault();
  });
});
