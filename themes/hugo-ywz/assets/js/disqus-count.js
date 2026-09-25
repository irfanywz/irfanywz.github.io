// assets/js/disqus-lazy.js
Defer.dom('.post-reactions', 0, 'disqus-triggered', function(node) {
    var script = document.createElement('script');
    script.id = 'dsq-count-scr';
    script.async = true;
    script.src = 'https://muhamad-irfan.disqus.com/count.js';
    document.head.appendChild(script);
}, { rootMargin: "200px" });