// Service worker - simplified to avoid cache mismatch with Vite hashed assets
const CACHE_NAME = 'keyfetti-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.delete(CACHE_NAME).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Pass through all requests - Vite handles asset hashing so we don't need to cache
  event.respondWith(fetch(event.request));
});
