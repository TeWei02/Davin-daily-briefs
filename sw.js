/* 技術與商業摘要 — Service Worker
 * 導覽採 network-first（每天的新摘要即時看到），離線時回快取；
 * 其餘同源資源採 stale-while-revalidate，讀過的文章之後離線也讀得到。
 */
const VERSION = 'davin-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await Promise.allSettled(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url; try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        (await caches.open(VERSION)).put(req, res.clone());
        return res;
      } catch (_) {
        return (await caches.match(req, { ignoreSearch: true }))
            || (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    const update = fetch(req).then(async (res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        (await caches.open(VERSION)).put(req, res.clone());
      }
      return res;
    }).catch(() => hit);
    return hit || update;
  })());
});
