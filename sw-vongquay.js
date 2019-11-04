var cacheName = 'vipvq';
var filesToCache = [
  // '/',
  'index.html',
  'assets/css/main.css',
  'assets/fonts/vl_booster_nextfy_black.ttf',
  'assets/fonts/vl_booster_nextfy_think.ttf',
  'assets/images/wheel.png',
  'assets/images/bg-muiten.png',
  'assets/images/btn2.png',
  'assets/images/muiten.png',
  'assets/images/bg.jpg',
  'assets/js/jquery-3.4.1.min.js',
  'assets/js/main.js'
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
