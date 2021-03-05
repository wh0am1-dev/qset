var CACHE_NAME = 'qset-cache-v1'
var urlsToCache = [
  '/qset/index.html',
  '/qset/img/qset-black.svg',
  '/qset/img/qset-white.svg',
  '/qset/bgm/aphex-twin-3.mp3',
  '/qset/bgm/aphex-twin-3.ogg',
  '/qset/data/audiologs.js',
  '/qset/css/main.css',
  '/qset/css/vendor/fontawesome-5.0.13.css',
  '/qset/css/vendor/tachyons.min.css',
  '/qset/js/audio.js',
  '/qset/js/bipbop.js',
  '/qset/js/color.js',
  '/qset/js/keyboard.js',
  '/qset/js/main.js',
  '/qset/js/mouse.js',
  '/qset/js/quote.js',
  '/qset/js/scroll.js',
  '/qset/js/touch.js',
  '/qset/js/vendor/fontawesome-5.0.13.min.js',
  '/qset/js/vendor/jquery-3.3.1.min.js',
  '/qset/js/vendor/jquery.color-2.1.2.min.js',
  '/qset/js/vendor/jquery.mobile-events.min.js'
]

self.addEventListener('install', event =>
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('opened cache')
      return cache.addAll(urlsToCache)
    })
  )
)

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response
      return fetch(event.request)
    })
  )
)
