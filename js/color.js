let color = 0

const bgColors = [
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
  '#FFA3D7' // light-pink
]

const fgColors = ['black-90']

const switchColor = () => {
  if ($('#content').is(':animated')) $('#content').clearQueue().stop()

  $('#content').animate(
    {
      backgroundColor: bgColors[color]
    },
    500,
    'swing',
    () => {}
  )
}

const nextColor = () => {
  if (++color >= bgColors.length) color = 0
  switchColor()
}

const prevColor = () => {
  if (--color < 0) color = bgColors.length - 1
  switchColor()
}

const rndColor = () => {
  let pre = color
  while (pre == color) color = Math.floor(Math.random() * bgColors.length)
  switchColor()
}
