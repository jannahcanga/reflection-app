const CACHE = 'reflection-v2';
const ASSETS = [
  '/reflection-app/',
  '/reflection-app/index.html',
  '/reflection-app/styles.css',
  '/reflection-app/app.js',
  '/reflection-app/manifest.json'
];

// On first load: save all files to the phone
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Clean up old cached versions when a new one arrives
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network first: try to load fresh, update cache, fall back to cache if offline
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
