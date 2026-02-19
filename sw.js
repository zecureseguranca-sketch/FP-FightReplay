const CACHE_NAME = "fp-fr-cache-v1";

const CORE = [
  "offline.html",
  "app.css",
  "app.js",
  "pwa.js",
  "firebase.js",
  "manifest.json",
  "login.html",
  "menu.html",
  "acionador.html",
  "lances.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin !== location.origin) return;

  const accept = req.headers.get("accept") || "";
  const isHTML = req.mode === "navigate" || accept.includes("text/html");

  // HTML: network-first (evita “desconfigurado” por cache antigo)
  if (isHTML) {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(async () => (await caches.match(req)) || caches.match("offline.html"))
    );
    return;
  }

  // Estáticos: cache-first
  event.respondWith(caches.match(req).then((c) => c || fetch(req)));
});