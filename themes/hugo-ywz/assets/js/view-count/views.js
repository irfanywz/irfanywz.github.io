// Angka view per post (elemen .post-view). Dipanggil lewat Defer.dom saat elemen mendekati viewport.
import { newPostData, postPath } from './post-data.js';

export async function updatePostViews(element, initFirebase) {
    const { db, ref, get, update, set, child } = await initFirebase();
    const postId = element.getAttribute('data-id');
    const viewCountPlaceholder = element.querySelector('.post-views-count-placeholder');
    if (!viewCountPlaceholder) return;

    const viewChildRef = child(ref(db), postPath(postId));

    try {
        const snapshot = await get(viewChildRef);
        let postData = snapshot.val();
        let isNew = false;

        if (postData === null) {
            postData = newPostData(postId, window.location.href);
            isNew = true;
        }

        viewCountPlaceholder.textContent = postData.value;
        viewCountPlaceholder.classList.remove('view-load');

        // Hanya halaman post itu sendiri yang menambah hitungan (bukan daftar/beranda).
        if (window.location.href.includes(postId) && window.location.pathname !== '/') {
            postData.value = (postData.value || 0) + 1;
            if (isNew) {
                await set(viewChildRef, postData);
            } else {
                await update(viewChildRef, { value: postData.value });
            }
        }
    } catch (error) {
        console.error('Error fetching/updating view count: ', error);
        viewCountPlaceholder.classList.remove('view-load');
        viewCountPlaceholder.textContent = 'Error';
    }
}
