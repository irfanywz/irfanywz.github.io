// Bentuk data satu post di Firebase Realtime Database. Murni (dites di tests/view-count.test.mjs).

/** "/blog/a.b/" → "_blog_a_b_" (titik dan garis miring tidak boleh ada di key Firebase). */
export function sanitizeId(id) {
    return id.replaceAll('.', '_').replaceAll('/', '_');
}

/** Path data post di database. */
export function postPath(postId) {
    return 'pages/id/' + sanitizeId(postId);
}

export function defaultReactions() {
    return { clap: 0, wow: 0, hmm: 0 };
}

/** Data awal untuk post yang belum pernah tercatat. */
export function newPostData(postId, url) {
    return {
        value: 0,
        url,
        id: postId,
        reactions: defaultReactions(),
    };
}
