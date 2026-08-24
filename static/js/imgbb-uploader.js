function imgbbUploader() {
    return {
        correctPassword: '', 
        apiKey: '',
        
        isUnlocked: false,
        inputPassword: '',
        showPasswordError: false,
        
        selectedFile: null,
        previewUrl: null,
        isUploading: false,
        uploadResult: null,
        rawJsonString: '',
        activeTab: 'links',

        init() {
            if (localStorage.getItem('imgbb_unlocked') === 'true') {
                this.isUnlocked = true;
            }
        },

        unlockApp() {
            if (this.inputPassword === this.correctPassword) {
                this.isUnlocked = true;
                this.showPasswordError = false;
                localStorage.setItem('imgbb_unlocked', 'true');
            } else {
                this.showPasswordError = true;
                this.inputPassword = '';
            }
        },

        lockApp() {
            this.isUnlocked = false;
            this.inputPassword = '';
            localStorage.removeItem('imgbb_unlocked');
        },

        handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) this.processAndUpload(file);
        },

        handleDrop(event) {
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.processAndUpload(file);
            }
        },

        processAndUpload(file) {
            this.selectedFile = file;
            this.previewUrl = URL.createObjectURL(file);
            this.uploadResult = null;
            this.rawJsonString = '';
            
            this.uploadImage();
        },

        async uploadImage() {
            if (!this.selectedFile) return;

            this.isUploading = true;

            const formData = new FormData();
            formData.append('image', this.selectedFile);

            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${this.apiKey}`, {
                    method: 'POST',
                    body: formData
                });

                const jsonResponse = await response.json();

                if (jsonResponse.success) {
                    // Auto replace domain i.ibb.co menjadi i.ibb.co.com pada seluruh string JSON
                    let rawString = JSON.stringify(jsonResponse, null, 4);
                    let replacedString = rawString.replace(/i\.ibb\.co/g, 'i.ibb.co.com');
                    
                    // Parse ulang ke objek data agar bagian UI Tautan ikut menggunakan domain baru
                    let parsedData = JSON.parse(replacedString);

                    this.uploadResult = parsedData.data;
                    this.rawJsonString = replacedString;
                } else {
                    alert('Gagal mengunggah gambar ke ImgBB.');
                }
            } catch (error) {
                console.error(error);
                alert('Terjadi kesalahan koneksi saat mengunggah.');
            } finally {
                this.isUploading = false;
            }
        },

        copyText(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Berhasil disalin ke clipboard!');
            });
        }
    }
}