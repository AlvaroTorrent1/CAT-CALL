const CACHE_NAME = 'cat-call-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './cat.jpg',
  './icon.png',
  './audio.mp3?v=2'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Forzar actualización inmediata
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
