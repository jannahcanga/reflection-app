const CACHE_VERSION = 'v20';
const CACHE = 'reflection-cache-' + CACHE_VERSION;

// App shell — changes with every code update, always fetched fresh when online
const APP_SHELL = [
  '/reflection-app/',
  '/reflection-app/index.html',
  '/reflection-app/styles.css',
  '/reflection-app/app.js',
  '/reflection-app/manifest.json'
];

// Assets that never change once published — safe to serve straight from cache
const STATIC_ASSETS = [
  '/reflection-app/icon.png',
  '/reflection-app/fonts/SpaceGrotesk-Bold.woff2'
];

const ASSETS = APP_SHELL.concat(STATIC_ASSETS);

// On first load (or after an update): precache everything, then activate
// immediately instead of sitting in "waiting" behind open tabs
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Drop every cache that isn't this version, then take control of any open
// pages right away. Only ever touches Cache Storage — never localStorage.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Static assets (icons/fonts): cache-first, since they never change.
// Everything else (HTML/JS/CSS, navigations): network-first, so the newest
// code always loads while you're online — cache is just the offline fallback.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isStatic = STATIC_ASSETS.includes(url.pathname);

  if (isStatic) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
    return;
  }

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
