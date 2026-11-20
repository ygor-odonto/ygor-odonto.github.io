// Fichas — Service Worker
// IMPORTANTE: a cada atualização do index.html, aumente a versão abaixo (fichas-v2, fichas-v3...)
const CACHE='fichas-v1';
const ARQUIVOS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Fontes do Google: guarda em cache para funcionar sem internet
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(r=>r||fetch(req).then(res=>{c.put(req,res.clone());return res}))));return;
  }
  if(url.origin!==location.origin)return;
  // Página: tenta a rede primeiro (pega atualizações) e usa o cache se estiver sem internet
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return res}).catch(()=>caches.match('./index.html')));return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req)));
});
