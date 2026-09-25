(function() {
    var loaded = false;

    async function initFirebaseFeatures() {
        if (loaded) return;
        loaded = true;

        try {
            const { initializeApp } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js");
            const { getDatabase, ref, get, update, set, child } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js");

            const firebaseConfig = {
                databaseURL: "https://counter-view-ddf90-default-rtdb.asia-southeast1.firebasedatabase.app"
            };

            const app = initializeApp(firebaseConfig);
            const db = getDatabase(app);

            async function updatePostViews(element) {
                observer.unobserve(element);
                const postId = element.getAttribute("data-id");
                const viewCountPlaceholder = element.querySelector(".post-views-count-placeholder");
                if (!viewCountPlaceholder) return;

                const dbRef = ref(db);
                const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
                const viewChildRef = child(dbRef, "pages/id/" + sanitizedId);

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
                    console.error("Error fetching or updating view count: ", error);
                    viewCountPlaceholder.classList.remove("view-load");
                    viewCountPlaceholder.textContent = "Error";
                }
            }

            async function loadReactions(postContainer) {
                observer.unobserve(postContainer);
                const postId = postContainer.getAttribute("data-id");
                const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
                
                const dbRef = ref(db);
                const reactionChildRef = child(dbRef, "pages/id/" + sanitizedId);
                const reactionItems = postContainer.querySelectorAll(".reaction-item");

                try {
                    const snapshot = await get(reactionChildRef);
                    const reactionsData = snapshot.val()?.reactions || {};

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

            async function handleReactionClick(event) {
                const reactionItem = event.target.closest(".reaction-item");
                if (!reactionItem) return;

                const postContainer = reactionItem.closest(".post-reactions");
                if (!postContainer) return;
                const postId = postContainer.getAttribute("data-id");
                const reactionType = reactionItem.getAttribute("data-type");
                const countEl = reactionItem.querySelector(".count");
                const iconEl = reactionItem.querySelector("span[class*='icon-[ri--']");

                if (!window.location.href.includes(postId)) {
                    alert("Reaksi hanya dapat diberikan di halaman postingan.");
                    return;
                }

                const sanitizedId = postId.replaceAll(".", "_").replaceAll("/", "_");
                const dbRef = ref(db);
                const reactionChildRef = child(dbRef, "pages/id/" + sanitizedId);

                // Jalankan animasi bounce/pulse pada ikon saat diklik
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
                            "value": 1,
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

            const observerOptions = { rootMargin: '0px', threshold: 0.0 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target.classList.contains("post-view")) {
                            updatePostViews(target);
                        }
                        if (target.classList.contains("post-reactions")) {
                            loadReactions(target);
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll(".post-view").forEach(element => {
                observer.observe(element);
            });

            document.querySelectorAll(".post-reactions").forEach(element => {
                observer.observe(element);
            });

            document.addEventListener("click", handleReactionClick);
            console.log('Firebase Lazy Loaded & Animated Multi-reactions Enabled');
        } catch (error) {
            console.error('Failed to load Firebase modules:', error);
        }
    }

    var events = ['mouseover', 'keydown', 'touchstart', 'scroll'];
    events.forEach(function(event) {
        window.addEventListener(event, initFirebaseFeatures, { passive: true, once: true });
    });
})();