const CACHE_NAME = 'study-scheduler-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// キャッシュがあればそこから高速に読み込む
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
