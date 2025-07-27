import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    variant?: 'floating' | 'inline';
    size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({
                                           phoneNumber,
                                           message = "Halo! Saya ingin bertanya tentang produk PawonSidomulyo 🌿",
                                           variant = 'floating',
                                           size = 'md'
                                       }: WhatsAppButtonProps) {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    const sizeClasses = {
        sm: 'w-12 h-12',
        md: 'w-14 h-14',
        lg: 'w-16 h-16'
    };

    const iconSizes = {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-7 h-7'
    };

    if (variant === 'floating') {
        return (
            <button
                onClick={handleClick}
                className={`fixed bottom-6 right-6 ${sizeClasses[size]} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group animate-pulse-gentle`}
                title="Chat via WhatsApp"
            >
                <MessageCircle className={`${iconSizes[size]} group-hover:animate-bounce`} />

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
        >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
        </button>
    );
}