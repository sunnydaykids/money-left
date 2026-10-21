const CACHE='money-left-shell-v2';
const FILES=['./','./index.html','./manifest.json','./icon2.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.filter(p=>p!=='./icon2.png')))));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('money-left-shell-')&&k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.open(CACHE).then(cache=>cache.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(r=>{
        if(r&&r.ok){cache.put(e.request,r.clone()).catch(()=>{});}
        return r;
      }).catch(()=>cache.match('./index.html'));
    }))
  );
});
