// ================================

function scrollHero() {
  if (!$('html').is(':animated')) {
    $('html').stop();
    $('html').animate({
      scrollTop: 0
    }, 500, "swing", function() {});
  }
}

function scrollContent() {
  if (!$('html').is(':animated')) {
    $('html').stop();
    $('html').animate({
      scrollTop: $('#content').offset().top
    }, 500, "swing", function() {});
  }
}

// ================================

var idx = 0;

var bgColors = [
  // '#FFD700', // yellow
  // '#FF4136', // red
  // '#408BC9', // blue
  // '#19A974', // green
  // '#FF80CC', // pink
  // '#5E2CA5', // purple
  // '#F48120', // orange
  '#FBF1A9', // light-yellow
  '#FF725C', // light-red
  '#76C4E2', // light-blue
  '#9EEBCF', // light-green
  '#FFA3D7', // light-pink
  '#A463F2', // light-purple
  '#FAAD3F'  // light-orange
];
var fgColors = [
  'black-90'
];

function switchBackground() {
  if ($('#content').is(':animated'))
    $('#content').stop();

  $('#content').animate({
    backgroundColor: bgColors[Math.floor(Math.random() * bgColors.length)]
  }, 500, "swing", function() {});
}

function switchQuote() {
  if ($('#quote').is(':animated'))
    $('#quote').stop();
  if ($('html').is(':animated'))
    $('html').stop();

  $('#quote').animate({
    opacity: 0
  }, 250, "swing", function() {
    if ($('#quote').hasClass('dummy')) {
      $('#quote').removeClass('dummy');
      idx = 0;
    } else if (!$('#qcontent').hasClass('tj')) {
      $('#qcontent').addClass('tj');
    }

    $('#qtitle').html(idx + '. ' + quotes[idx].author + ', ' + quotes[idx].date);
    $('#qcontent').html(quotes[idx].quote);

    $('html').animate({
      scrollTop: $('#content').offset().top
    }, 250, "swing", function() {});

    $('#quote').animate({
      opacity: 1
    }, 500, "swing", function() {});

    switchBackground();
  });
}

function nextQuote() {
  if (++idx >= quotes.length) idx = 0;
  switchQuote();
}

function prevQuote() {
  if (--idx < 0) idx = quotes.length - 1;
  switchQuote();
}

function rndQuote() {
  idx = Math.floor(Math.random() * Math.floor(quotes.length));
  switchQuote();
}

// ================================

var amp = { v: 1.0, on: true }

function toggleAudio() {
  if (amp.v >= 0.5) {
    $(amp).animate({v:0.0}, {
      duration: 500,
      easing: "swing",
      step: function(val) {
        $('#bgm').get(0).volume = val;
      }
    });
  } else {
    $(amp).animate({v:1.0}, {
      duration: 500,
      easing: "swing",
      step: function(val) {
        $('#bgm').get(0).volume = val;
      }
    });
  }
}

// ================================

var mousewheelEvent = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';

$('html').bind(mousewheelEvent, function(e) {
  if ($('html').is(':animated'))
    e.preventDefault();

  var evt = window.event || e;
  evt = evt.originalEvent ? evt.originalEvent : evt;            
  var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;

  if (delta > 0) { // scroll up
    if ($(window).scrollTop() <= $(window).height())
      scrollHero();
  } else { // scroll down
    if ($(window).scrollTop() < $(window).height())
      scrollContent();
  }
});

// ================================

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

$(window).bind('keyup', function(e) {
  if (isForbidden(e.keyCode))
    e.preventDefault();

  if (e.keyCode == 9 || e.keyCode == 13) { // tab/enter: open/close
    if ($(window).scrollTop() > $(window).height() / 2 && $(window).scrollTop() <= $(window).height())
      scrollHero();
    else
      scrollContent();
  } else if (e.key === 'j') { // j: next
    if ($('#quote').hasClass('dummy')) switchQuote();
    else nextQuote();
  } else if (e.key === 'k') { // k: previous
    if ($('#quote').hasClass('dummy')) switchQuote();
    else prevQuote();
  } else if (e.key === ' ') { // space: random
    if ($('#quote').hasClass('dummy')) switchQuote();
    else rndQuote();
  } else if (e.key === 'm') { // m: play/pause music
    toggleAudio();
  } else if (e.key === 'h') { // h: background
    switchBackground();
  } else {
    var bip = [
      'death', 'life',
      '0', '1',
      'evil', 'good',
      'down', 'up',
      'bottom', 'top',
      'false', 'true',
      'yin', 'yang',
      'object', 'subject',
      'background', 'shape',
      'empty', 'full',
      'no', 'yes',
      'low', 'high',
      'goodbye', 'hello',
      'stop', 'go',
      'bip', 'bop'
    ];
    var bop = Math.floor(Math.random() * bip.length);

    console.log(bip[bop]);
  }
});

$(window).bind('keydown', function(e) {
  if (isForbidden(e.keyCode))
    e.preventDefault();

  if (e.keyCode == 38) { // up
    if ($('html').is(':animated'))
      e.preventDefault();
    else if ($(window).scrollTop() <= $(window).height())
      scrollHero();
  } else if (e.keyCode == 40) { // down
    if ($('html').is(':animated'))
      e.preventDefault();
    else if ($(window).scrollTop() < $(window).height())
      scrollContent();
  }
});

$(window).bind('keypress', function(e) {
  if (isForbidden(e.keyCode))
    e.preventDefault();
});
