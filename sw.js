self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Just fetch from the network, no caching
    event.respondWith(fetch(event.request));
});
