const CACHE = 'metamorfose-v3';
const ASSETS = ['/', '/index.html', '/manifest.json'];

// ── INSTALL ──────────────────────────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// ── ACTIVATE ─────────────────────────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── FETCH ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/index.html')))
  );
});

// ── PUSH NOTIFICATION (from server or self.registration.showNotification) ────
self.addEventListener('push', e => {
  let data = { title: '💪 Metamorfose', body: 'Hora do treino!', icon: '/icons/icon-192.png', badge: '/icons/icon-192.png', tag: 'metamorfose-reminder', data: { url: '/' } };
  if (e.data) {
    try { data = { ...data, ...e.data.json() }; } catch (_) { data.body = e.data.text(); }
  }
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: data.tag,
      vibrate: [200, 100, 200],
      requireInteraction: false,
      actions: [
        { action: 'open', title: '▶ Abrir App' },
        { action: 'dismiss', title: '✕ Fechar' }
      ],
      data: data.data
    })
  );
});

// ── NOTIFICATION CLICK ────────────────────────────────────────────────────────
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  const url = (e.notification.data && e.notification.data.url) ? e.notification.data.url : '/';
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ── MESSAGE (schedule local notifications from main thread) ──────────────────
self.addEventListener('message', e => {
  if (!e.data) return;

  // Triggered by main thread to fire a scheduled notification
  if (e.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, tag, delay } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: tag || 'metamorfose',
        vibrate: [200, 100, 200],
        requireInteraction: false,
        actions: [
          { action: 'open', title: '▶ Abrir App' },
          { action: 'dismiss', title: '✕ Fechar' }
        ],
        data: { url: '/' }
      });
    }, delay || 0);
  }
});

// ── BACKGROUND SYNC ───────────────────────────────────────────────────────────
self.addEventListener('sync', e => {
  if (e.tag === 'metamorfose-daily-check') {
    e.waitUntil(
      self.registration.showNotification('💪 Metamorfose — Lembrete Diário', {
        body: 'Não esqueça do seu treino hoje! Você está no caminho certo 🔥',
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: 'daily-check',
        vibrate: [200, 100, 200]
      })
    );
  }
});
