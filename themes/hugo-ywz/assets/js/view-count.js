// assets/js/firebase-lazy.js
(function() {
    let dbInstance = null;
    let initPromise = null;

    // Singleton loader Firebase
    function initFirebase() {
        if (initPromise) return initPromise;

        initPromise = (async () => {
            try {
                const { initializeApp } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js");
                const { getDatabase, ref, get, update, set, child } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js");

                const app = initializeApp({
                    databaseURL: "https://counter-view-ddf90-default-rtdb.asia-southeast1.firebasedatabase.app"
                });
                
                dbInstance = {
                    db: getDatabase(app),
                    ref, get, update, set, child
                };

                // Pasang global click listener untuk tombol reaksi setelah modul siap
                document.addEventListener("click", handleReactionClick);
                console.log('Firebase Lazy Loaded via Defer.dom');
                return dbInstance;
            } catch (error) {
                console.error('Failed to load Firebase modules:', error);
                initPromise = null;
                throw error;
            }
        })();

        return initPromise;
    }

    // Logika Update View Count
    async function updatePostViews(element) {
        const { db, ref, get, update, set, child } = await initFirebase();
        const postId = element.getAttribute("data-id");
        const viewCountPlaceholder = element.querySelector(".post-views-count-placeholder");
        if (!viewCountPlaceholder) return;

        const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
        const viewChildRef = child(ref(db), "pages/id/" + sanitizedId);

        try {
            const snapshot = await get(viewChildRef);
            let postData = snapshot.val();
            let isNew = false;

            if (postData === null) {
                postData = {
                    "value": 0,
                    "url": window.location.href,
                    "id": postId,
                    "reactions": { "clap": 0, "wow": 0, "hmm": 0 }
                };
                isNew = true;
            }

            viewCountPlaceholder.textContent = postData.value;
            viewCountPlaceholder.classList.remove("view-load");

            if (window.location.href.includes(postId) && window.location.pathname !== "/") {
                postData.value = (postData.value || 0) + 1;
                if (isNew) {
                    await set(viewChildRef, postData);
                } else {
                    await update(viewChildRef, { "value": postData.value });
                }
            }
        } catch (error) {
            console.error("Error fetching/updating view count: ", error);
            viewCountPlaceholder.classList.remove("view-load");
            viewCountPlaceholder.textContent = "Error";
        }
    }

    // Logika Load Reactions
    async function loadReactions(postContainer) {
        const { db, ref, get, set, child } = await initFirebase();
        const postId = postContainer.getAttribute("data-id");
        if (!postId) return;

        const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
        const reactionChildRef = child(ref(db), "pages/id/" + sanitizedId);
        const reactionItems = postContainer.querySelectorAll(".reaction-item");

        try {
            const snapshot = await get(reactionChildRef);
            let postData = snapshot.val();

            if (postData === null) {
                postData = {
                    "value": 0,
                    "url": window.location.href,
                    "id": postId,
                    "reactions": { "clap": 0, "wow": 0, "hmm": 0 }
                };
                await set(reactionChildRef, postData);
            } else if (!postData.reactions) {
                postData.reactions = { "clap": 0, "wow": 0, "hmm": 0 };
                await set(reactionChildRef, postData);
            }

            const reactionsData = postData.reactions;

            reactionItems.forEach(item => {
                const reactionType = item.getAttribute("data-type");
                const countEl = item.querySelector(".count");
                if (countEl) {
                    const count = reactionsData[reactionType] || 0;
                    countEl.textContent = count;
                    countEl.classList.remove("reaction-loading");
                }
            });
        } catch (error) {
            console.error("Error loading reactions: ", error);
            reactionItems.forEach(item => {
                const countEl = item.querySelector(".count");
                if (countEl) {
                    countEl.textContent = "E";
                    countEl.classList.remove("reaction-loading");
                }
            });
        }
    }

    // Logika Klik Tombol Reaksi
    async function handleReactionClick(event) {
        const reactionItem = event.target.closest(".reaction-item");
        if (!reactionItem) return;

        const postContainer = reactionItem.closest(".post-reactions");
        if (!postContainer) return;

        const { db, ref, get, update, child } = await initFirebase();
        const postId = postContainer.getAttribute("data-id");
        const reactionType = reactionItem.getAttribute("data-type");
        const countEl = reactionItem.querySelector(".count");
        const iconEl = reactionItem.querySelector("span[class*='icon-[ri--']");

        if (!window.location.href.includes(postId)) {
            alert("Reaksi hanya dapat diberikan di halaman postingan.");
            return;
        }

        const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
        const reactionChildRef = child(ref(db), "pages/id/" + sanitizedId);

        if (iconEl) {
            iconEl.classList.add("scale-125", "rotate-12", "transition-transform", "duration-200");
            setTimeout(() => {
                iconEl.classList.remove("scale-125", "rotate-12");
            }, 250);
        }

        try {
            const snapshot = await get(reactionChildRef);
            let postData = snapshot.val();

            if (postData === null) {
                postData = {
                    "value": 0,
                    "url": window.location.href,
                    "id": postId,
                    "reactions": { "clap": 0, "wow": 0, "hmm": 0 }
                };
            }

            postData.reactions = postData.reactions || { "clap": 0, "wow": 0, "hmm": 0 };
            const newCount = (postData.reactions[reactionType] || 0) + 1;
            postData.reactions[reactionType] = newCount;

            await update(reactionChildRef, { "reactions": postData.reactions });

            if (countEl) {
                countEl.textContent = newCount;
                countEl.classList.add("text-indigo-600", "dark:text-indigo-400", "scale-110", "transition-all");
                setTimeout(() => {
                    countEl.classList.remove("text-indigo-600", "dark:text-indigo-400", "scale-110");
                }, 300);
            }
        } catch (error) {
            console.error("Error updating reaction: ", error);
            alert("Gagal mengirim reaksi. Silakan coba lagi.");
        }
    }

    // Gabung atau pisah selector dengan aman, atau gunakan satu observer gabungan jika elemennya berdampingan
    Defer.dom('.post-view', 0, 'view-triggered', function(node) {
        updatePostViews(node);
        // Cari elemen reaction di sekitar node view jika ada di card yang sama
        const reactionNode = node.parentElement.querySelector('.post-reactions') || document.querySelector('.post-reactions');
        if (reactionNode && !reactionNode.dataset.loaded) {
            reactionNode.dataset.loaded = "true";
            loadReactions(reactionNode);
        }
    }, { rootMargin: '200px' });

    Defer.dom('.post-reactions', 0, 'reactions-triggered', function(node) {
        if (!node.dataset.loaded) {
            node.dataset.loaded = "true";
            loadReactions(node);
        }
    }, { rootMargin: '200px' });
})();