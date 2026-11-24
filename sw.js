const CACHE_NAME = 'swati-gym-v2';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./apple-touch-icon.png",
  "./images/bench_press.png",
  "./images/bicycle_crunch.png",
  "./images/calf_raise.png",
  "./images/carry.svg",
  "./images/deadlift.png",
  "./images/generic.svg",
  "./images/lat_pulldown.png",
  "./images/leg_curl.png",
  "./images/lunge.png",
  "./images/plank.png",
  "./images/pushup.png",
  "./images/reverse_flyes.png",
  "./images/seated_row.png",
  "./images/shoulder_press.png",
  "./images/single_arm_row.png",
  "./images/squat.png",
  "./images/step_up.png"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
});

// Network-first so an updated plan always wins when online; falls back to the cached copy offline.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
