// Tombol reaksi (clap/wow/hmm) di bawah post (elemen .post-reactions).
import { defaultReactions, newPostData, postPath } from './post-data.js';

export async function loadReactions(postContainer, initFirebase) {
    const { db, ref, get, set, child } = await initFirebase();
    const postId = postContainer.getAttribute('data-id');
    if (!postId) return;

    const reactionChildRef = child(ref(db), postPath(postId));
    const reactionItems = postContainer.querySelectorAll('.reaction-item');

    try {
        const snapshot = await get(reactionChildRef);
        let postData = snapshot.val();

        if (postData === null) {
            postData = newPostData(postId, window.location.href);
            await set(reactionChildRef, postData);
        } else if (!postData.reactions) {
            postData.reactions = defaultReactions();
            await set(reactionChildRef, postData);
        }

        const reactionsData = postData.reactions;

        reactionItems.forEach(item => {
            const reactionType = item.getAttribute('data-type');
            const countEl = item.querySelector('.count');
            if (countEl) {
                const count = reactionsData[reactionType] || 0;
                countEl.textContent = count;
                countEl.classList.remove('reaction-loading');
            }
        });
    } catch (error) {
        console.error('Error loading reactions: ', error);
        reactionItems.forEach(item => {
            const countEl = item.querySelector('.count');
            if (countEl) {
                countEl.textContent = 'E';
                countEl.classList.remove('reaction-loading');
            }
        });
    }
}

export async function handleReactionClick(event, initFirebase) {
    const reactionItem = event.target.closest('.reaction-item');
    if (!reactionItem) return;

    const postContainer = reactionItem.closest('.post-reactions');
    if (!postContainer) return;

    const { db, ref, get, update, child } = await initFirebase();
    const postId = postContainer.getAttribute('data-id');
    const reactionType = reactionItem.getAttribute('data-type');
    const countEl = reactionItem.querySelector('.count');
    const iconEl = reactionItem.querySelector("span[class*='icon-[ri--']");

    if (!window.location.href.includes(postId)) {
        alert('Reaksi hanya dapat diberikan di halaman postingan.');
        return;
    }

    const reactionChildRef = child(ref(db), postPath(postId));

    if (iconEl) {
        iconEl.classList.add('scale-125', 'rotate-12', 'transition-transform', 'duration-200');
        setTimeout(() => {
            iconEl.classList.remove('scale-125', 'rotate-12');
        }, 250);
    }

    try {
        const snapshot = await get(reactionChildRef);
        let postData = snapshot.val();

        if (postData === null) {
            postData = newPostData(postId, window.location.href);
        }

        postData.reactions = postData.reactions || defaultReactions();
        const newCount = (postData.reactions[reactionType] || 0) + 1;
        postData.reactions[reactionType] = newCount;

        await update(reactionChildRef, { reactions: postData.reactions });

        if (countEl) {
            countEl.textContent = newCount;
            countEl.classList.add('text-indigo-600', 'dark:text-indigo-400', 'scale-110', 'transition-all');
            setTimeout(() => {
                countEl.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'scale-110');
            }, 300);
        }
    } catch (error) {
        console.error('Error updating reaction: ', error);
        alert('Gagal mengirim reaksi. Silakan coba lagi.');
    }
}
