var color = 0;

var bgColors = [
  // '#FFD700', // yellow
  // '#FF4136', // red
  // '#408BC9', // blue
  // '#19A974', // green
  // '#FF80CC', // pink
  // '#5E2CA5', // purple
  // '#F48120', // orange
  '#FF725C', // light-red
  '#FAAD3F', // light-orange
  '#FBF1A9', // light-yellow
  '#9EEBCF', // light-green
  '#76C4E2', // light-blue
  '#A463F2', // light-purple
  '#FFA3D7'  // light-pink
];

var fgColors = [
  'black-90'
];

function switchColor() {
  if ($('#content').is(':animated'))
    $('#content').clearQueue().stop();

  $('#content').animate({
    backgroundColor: bgColors[color]
  }, 500, 'swing', function() {});
}

function nextColor() {
  if (++color >= bgColors.length) color = 0;
  switchColor();
}

function prevColor() {
  if (--color < 0) color = bgColors.length - 1;
  switchColor();
}

function rndColor() {
  var pre = color;
  while (pre == color)
    color = Math.floor(Math.random() * bgColors.length);
  switchColor();
}
