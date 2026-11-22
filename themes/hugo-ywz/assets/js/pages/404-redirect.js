(function() {
    const currentPath = window.location.pathname;

    // 1. Redirect untuk URL lama /posts/
    if (currentPath.startsWith('/posts/')) {
        const newPath = currentPath.replace('/posts/', '/');
        window.location.replace(window.location.origin + newPath);
        return;
    }

    // 2. Redirect khusus untuk URL /docs/ ke halaman portfolio
    if (currentPath === '/docs' || currentPath === '/docs/' || currentPath.startsWith('/docs/')) {
        window.location.replace('/about/#portofolio');
        return;
    }
})();
