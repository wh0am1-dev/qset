let color = 0

const colors = [
  // '#FFD700', // yellow
  // '#FF4136', // red
  // '#408BC9', // blue
  // '#19A974', // green
  // '#FF80CC', // pink
  // '#5E2CA5', // purple
  // '#F48120', // orange

  { bg: '#FF725C', fg: 'rgba(0, 0, 0, .9)' }, // light-red
  { bg: '#FAAD3F', fg: 'rgba(0, 0, 0, .9)' }, // light-orange
  { bg: '#FBF1A9', fg: 'rgba(0, 0, 0, .9)' }, // light-yellow
  { bg: '#9EEBCF', fg: 'rgba(0, 0, 0, .9)' }, // light-green
  { bg: '#76C4E2', fg: 'rgba(0, 0, 0, .9)' }, // light-blue
  { bg: '#A463F2', fg: 'rgba(0, 0, 0, .9)' }, // light-purple
  { bg: '#FFA3D7', fg: 'rgba(0, 0, 0, .9)' } // light-pink
]

const switchColor = () => {
  if ($('#content').is(':animated')) $('#content').clearQueue().stop()

  $('#content').animate(
    {
      color: colors[color].fg,
      backgroundColor: colors[color].bg
    },
    150,
    'swing',
    () => {}
  )
}

const nextColor = () => {
  if (++color >= colors.length) color = 0
  switchColor()
}

const prevColor = () => {
  if (--color < 0) color = colors.length - 1
  switchColor()
}

const rndColor = () => {
  let pre = color
  while (pre == color) color = Math.floor(Math.random() * colors.length)
  switchColor()
}
