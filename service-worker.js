self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open('pilot-cache-v1').then(cache => cache.addAll(['/','/index.html','/manifest.json']))
  );
});
self.addEventListener('activate', event => { self.clients.claim(); });
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
