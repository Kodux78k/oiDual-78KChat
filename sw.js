/* Simple PWA cache – Dual / Infodose */
/* FILE: sw.js */

const CACHE_NAME = 'oiDual-78KChat-v1';

const OFFLINE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Navegações → tenta rede, cai pro index offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index').then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Demais requests → cache first, depois rede
  event.respondWith(
    caches.match(req).then((cached) => {
      return (
        cached ||
        fetch(req).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          return response;
        })
      );
    })
  );
});
