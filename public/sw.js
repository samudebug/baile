const staticCacheName = "masquerade-cache";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/static'
            ]);
        })
    )
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.filter((key) => {
                return key.indexOf(staticCacheName) !== 0;
            })
            .map((key) => {
                return caches.delete(key);
            }));
            
        })
    )
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (cachedResponse) {
        return cachedResponse || fetch(event.request);
      })
    );
  });