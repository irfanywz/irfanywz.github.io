(function() {
    var langNames = {
        'js': 'JavaScript', 'javascript': 'JavaScript',
        'ts': 'TypeScript', 'typescript': 'TypeScript',
        'py': 'Python', 'python': 'Python',
        'html': 'HTML', 'css': 'CSS',
        'bash': 'Bash', 'sh': 'Shell',
        'go': 'Go', 'golang': 'Go',
        'json': 'JSON', 'yaml': 'YAML', 'yml': 'YAML',
        'toml': 'TOML', 'sql': 'SQL', 'php': 'PHP'
    };

    // Helper ambil teks murni
    function getCodeText(el) {
        var codeTd = el.querySelector('td.lntd:last-child code');
        var code = el.querySelector('code');
        if (codeTd) return codeTd.textContent;
        if (code) return code.textContent;
        return el.textContent;
    }

    // Buka POPUP Murni Plain Text via Blob URL
    function openRawPopup(codeText) {
        var width = 800;
        var height = 600;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        var features = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',resizable=yes,scrollbars=yes,status=no';

        // Buat objek Blob bertipe text/plain murni
        var blob = new Blob([codeText], { type: 'text/plain;charset=utf-8' });
        var blobUrl = URL.createObjectURL(blob);

        var popupWin = window.open(blobUrl, '_blank', features);

        if (!popupWin) {
            alert('Popup terblokir browser! Tolong izinkan popup untuk situs ini.');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            var targets = document.querySelectorAll('.post-content-full .highlight, .post-content-full pre');

            targets.forEach(function(el) {
                if (el.tagName.toLowerCase() === 'pre' && el.closest('.highlight')) return;
                if (el.querySelector('.code-header')) return;

                var code = el.querySelector('code');
                var langName = 'CODE';

                if (code) {
                    var langClass = Array.from(code.classList).find(function(c) {
                        return c.startsWith('language-');
                    });
                    if (langClass) {
                        var lang = langClass.replace('language-', '');
                        langName = langNames[lang] || lang.toUpperCase();
                    }
                }

                // Header macOS
                var header = document.createElement('div');
                header.className = 'code-header';
                header.innerHTML = 
                    '<div class="header-left" style="display: flex; align-items: center; gap: 0.75rem;">' +
                        '<div class="dots" style="display: flex; gap: 0.375rem;">' +
                            '<span class="dot red"></span>' +
                            '<span class="dot yellow"></span>' +
                            '<span class="dot green"></span>' +
                        '</div>' +
                        '<span class="lang-label">' + langName + '</span>' +
                    '</div>';

                // Tombol Kanan
                var actionGroup = document.createElement('div');
                actionGroup.style.cssText = 'position: absolute; top: 0.35rem; right: 0.75rem; z-index: 30; display: flex; gap: 0.35rem;';

                var rawBtn = document.createElement('button');
                rawBtn.className = 'code-copy-btn';
                rawBtn.style.position = 'static';
                rawBtn.textContent = 'Raw';
                rawBtn.addEventListener('click', function() {
                    var text = getCodeText(el);
                    openRawPopup(text);
                });

                var copyBtn = document.createElement('button');
                copyBtn.className = 'code-copy-btn';
                copyBtn.style.position = 'static';
                copyBtn.textContent = 'Copy';
                copyBtn.addEventListener('click', function() {
                    var textToCopy = getCodeText(el);
                    navigator.clipboard.writeText(textToCopy).then(function() {
                        copyBtn.textContent = 'Copied!';
                        copyBtn.classList.add('copied');
                        setTimeout(function() {
                            copyBtn.textContent = 'Copy';
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    });
                });

                actionGroup.appendChild(rawBtn);
                actionGroup.appendChild(copyBtn);

                el.insertBefore(header, el.firstChild);
                el.appendChild(actionGroup);
            });
        }, 100);
    });
})();