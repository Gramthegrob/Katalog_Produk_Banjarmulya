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
        sm: 'w-12 h-12 sm:w-14 sm:h-14',
        md: 'w-14 h-14 sm:w-16 sm:h-16',
        lg: 'w-16 h-16 sm:w-18 sm:h-18'
    };

    const iconSizes = {
        sm: 'w-5 h-5 sm:w-6 sm:h-6',
        md: 'w-6 h-6 sm:w-7 sm:h-7',
        lg: 'w-7 h-7 sm:w-8 sm:h-8'
    };

    if (variant === 'floating') {
        return (
            <button
                onClick={handleClick}
                className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 ${sizeClasses[size]} bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 flex items-center justify-center group animate-pulse-gentle touch-manipulation`}
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
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base touch-manipulation"
        >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>WhatsApp</span>
        </button>
    );
}