export const openWhatsAppForPackage = (pkg) => {
    const phoneNumber = '918146003632';
    const message = [
        'Hello, I would like to book this package:',
        `Package: ${pkg.name}`,
        `Price: Rs. ${pkg.price}/-`,
        `Tests: ${pkg.features.join(', ')}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};