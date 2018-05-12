var idx = 0;

function liftTheVeil() {
  idx = 0;
  toggleAudio();
  $('#qcontent').addClass('tj');
  $('#quote').removeClass('maya');
}

function switchQuote() {
  if ($('#quote').is(':animated'))
    $('#quote').clearQueue().stop();
  if ($('html').is(':animated'))
    $('html').clearQueue().stop();

  $('#quote').animate({
    opacity: 0
  }, 250, 'swing', function() {
    if ($('#quote').hasClass('maya'))
      liftTheVeil();

    scrollContent(250);
    $('#qtitle').html(idx + '. ' + quotes[idx].author + ', ' + quotes[idx].date);
    $('#qcontent').html(quotes[idx].quote);

    $('#quote').animate({
      opacity: 1
    }, 250, 'swing', function() {});
  });
}

function nextQuote() {
  if (++idx >= quotes.length) idx = 0;
  switchQuote();
  nextColor();
}

function prevQuote() {
  if (--idx < 0) idx = quotes.length - 1;
  switchQuote();
  prevColor();
}

function rndQuote() {
  var pre = idx;
  while (pre == idx)
    idx = Math.floor(Math.random() * Math.floor(quotes.length));
  switchQuote();
  rndColor();
}
