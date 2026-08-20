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

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            // Ambil semua container kode (baik yang ber-nomor / .highlight maupun pre biasa)
            var targets = document.querySelectorAll('.post-content-full .highlight, .post-content-full pre');

            targets.forEach(function(el) {
                // Jangan proses pre yang ada di DALAM .highlight biar ga double
                if (el.tagName.toLowerCase() === 'pre' && el.closest('.highlight')) return;
                
                // Jangan proses jika header sudah terpasang
                if (el.querySelector('.code-header')) return;

                // Cari elemen code untuk deteksi bahasa
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

                // Buat Header macOS
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

                // Buat Tombol Copy
                var copyBtn = document.createElement('button');
                copyBtn.className = 'code-copy-btn';
                copyBtn.textContent = 'Copy';

                // Inject ke paling atas container utama
                el.insertBefore(header, el.firstChild);
                el.appendChild(copyBtn);

                // Logika Klik Copy
                copyBtn.addEventListener('click', function() {
                    var textToCopy = '';
                    
                    // Jika Hugo Chroma Table (ber-nomor), ambil teks dari kolom kanan (td.lntd kedua)
                    var codeTd = el.querySelector('td.lntd:last-child code');
                    if (codeTd) {
                        textToCopy = codeTd.textContent;
                    } else if (code) {
                        textToCopy = code.textContent;
                    } else {
                        textToCopy = el.textContent;
                    }

                    navigator.clipboard.writeText(textToCopy).then(function() {
                        copyBtn.textContent = 'Copied!';
                        copyBtn.classList.add('copied');
                        setTimeout(function() {
                            copyBtn.textContent = 'Copy';
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    });
                });
            });
        }, 100);
    });
})();