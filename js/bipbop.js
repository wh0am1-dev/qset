const bipbop = () => {
  const bip = [
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
  ]

  const bop = Math.floor(Math.random() * bip.length)
  console.log(bip[bop])
}
