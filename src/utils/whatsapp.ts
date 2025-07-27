// WhatsApp Business number (replace with your actual WhatsApp Business number)
const WHATSAPP_NUMBER = "+6287855382757"; // Replace with your actual number

export interface WhatsAppMessageTemplate {
    productName: string;
    productPrice: string;
    productCategory: string;
    productDescription: string;
    customerName?: string;
    quantity?: number;
}

export const generateWhatsAppMessage = (template: WhatsAppMessageTemplate): string => {
    const { productName, productPrice, productCategory, productDescription, customerName = "", quantity = 1 } = template;

    const message = `Halo! Saya tertarik dengan produk dari PawonSidomulyo 🌿

📦 *Detail Produk:*
• Nama: ${productName}
• Kategori: ${productCategory}
• Harga: ${productPrice}
• Deskripsi: ${productDescription}
• Jumlah yang diinginkan: ${quantity}

👤 *Informasi Pembeli:*
• Nama: ${customerName || "[Silakan isi nama Anda]"}
• Alamat: [Silakan isi alamat lengkap]
• No. HP: [Silakan isi nomor HP]

❓ *Pertanyaan:*
• Apakah produk ini ready stock?
• Bagaimana cara pembayaran dan pengiriman?
• Apakah ada minimum order?

Terima kasih! 🙏`;

    return message;
};

export const openWhatsAppChat = (message: string): void => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

    // Open in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

export const formatPriceForWhatsApp = (price: number): string => {
    return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });
};