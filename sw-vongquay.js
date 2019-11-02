var cacheName = 'vong-quay-live2';
var filesToCache = [
  '/',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/index.html',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/css/main.css',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/css/main.css.map',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/fonts/vl_booster_nextfy_black.ttf',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/fonts/vl_booster_nextfy_think.ttf',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/images/wheel.png',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/images/bg-muiten.png',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/images/btn2.png',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/images/muiten.png',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/images/bg.jpg',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/js/jquery-3.4.1.min.js',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/js/app.js',
  'https://luonghuynh227.github.io/vong-quay-an-nhau/assets/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
