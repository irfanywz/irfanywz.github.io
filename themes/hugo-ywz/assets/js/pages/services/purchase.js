import { formatRupiah } from '../../lib/format.js';

/**
 * Teks pesan untuk WhatsApp/Telegram. Telegram memakai **tebal**, WhatsApp *tebal*.
 * @param {{product:object, variant:?object, priceLabel:string, platform:string, href:string}} input
 */
export function buildMessage({ product, variant, priceLabel, platform, href }) {
    const isTelegram = platform === 'telegram';
    const bold = (text) => isTelegram ? `**${text}**` : `*${text}*`;

    const paid = product.payQr;
    let message = paid
        ? `Halo, saya sudah melakukan pembayaran untuk ${product.type} ${bold(product.name)}\n\n`
        : `Halo, saya tertarik dengan ${product.type} ${bold(product.name)}\n\n`;

    if (variant) {
        message += `Varian: ${bold(variant.name)}\n`;
    }

    message += `${paid ? 'Total dibayar' : 'Harga'}: ${bold(priceLabel)}\n`;
    message += `Link: ${href}`;
    if (paid) {
        message += `\n\nBukti pembayaran saya lampirkan di chat ini.`;
    }
    return message;
}

/** URL chat dengan teks terisi; string kosong bila platform tidak dikenal. */
export function contactUrl(platform, contact, message) {
    const text = encodeURIComponent(message);
    if (platform === 'whatsapp') return `https://wa.me/${contact.wa}?text=${text}`;
    if (platform === 'telegram') return `https://t.me/${contact.telegram}?text=${text}`;
    return '';
}

/** Kartu pembelian di halaman produk. Dipakai: x-data="productPurchase({ product, contact })". */
export function productPurchase(config) {
    return {
        product: config.product,
        contact: config.contact,
        selectedVariant: null,
        copied: false,
        qrOpen: false,

        init() {
            if (!this.product.free && this.product.variants && this.product.variants.length > 0) {
                this.selectedVariant = this.product.variants[0];
            }
        },

        get finalPrice() {
            if (this.selectedVariant) {
                return this.selectedVariant.price;
            }
            return this.product.price || 0;
        },

        get priceLabel() {
            return this.product.free ? 'Gratis' : this.formatRupiah(this.finalPrice);
        },

        async copyAmount() {
            try {
                await navigator.clipboard.writeText(String(this.finalPrice));
                this.copied = true;
                setTimeout(() => { this.copied = false; }, 2000);
            } catch (e) {}
        },

        formatRupiah,

        sendTo(platform) {
            const message = buildMessage({
                product: this.product,
                variant: this.selectedVariant,
                priceLabel: this.priceLabel,
                platform,
                href: window.location.href,
            });
            window.open(contactUrl(platform, this.contact, message), '_blank');
        },
    };
}
