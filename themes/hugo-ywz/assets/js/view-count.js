// Hitung view dan reaksi per post (Firebase Realtime Database). Entry bundle terpisah: view-count/*.js
// databaseUrl dikirim dari layouts/_partials/components/view-count-js.html (js.Build params)
import * as params from '@params';
import { createFirebaseLoader } from './view-count/firebase.js';
import { handleReactionClick, loadReactions } from './view-count/reactions.js';
import { updatePostViews } from './view-count/views.js';

// Firebase baru dimuat saat dibutuhkan; begitu siap, pasang satu listener klik untuk tombol reaksi.
const initFirebase = createFirebaseLoader({
    databaseUrl: params.databaseUrl,
    onReady: () => document.addEventListener('click', (event) => handleReactionClick(event, initFirebase)),
});

// Gabung atau pisah selector dengan aman, atau gunakan satu observer gabungan jika elemennya berdampingan
Defer.dom('.post-view', 0, 'view-triggered', function(node) {
    updatePostViews(node, initFirebase);
    // Cari elemen reaction di sekitar node view jika ada di card yang sama
    const reactionNode = node.parentElement.querySelector('.post-reactions') || document.querySelector('.post-reactions');
    if (reactionNode && !reactionNode.dataset.loaded) {
        reactionNode.dataset.loaded = 'true';
        loadReactions(reactionNode, initFirebase);
    }
}, { rootMargin: '200px' });

Defer.dom('.post-reactions', 0, 'reactions-triggered', function(node) {
    if (!node.dataset.loaded) {
        node.dataset.loaded = 'true';
        loadReactions(node, initFirebase);
    }
}, { rootMargin: '200px' });
