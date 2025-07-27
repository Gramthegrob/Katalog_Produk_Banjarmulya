import React, { useState } from 'react';
import { Star, Leaf, MessageCircle, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';
import { generateWhatsAppMessage, openWhatsAppChat, formatPriceForWhatsApp } from '../utils/whatsapp';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleWhatsAppClick = async () => {
        setIsLoading(true);

        try {
            const messageTemplate = {
                productName: product.name,
                productPrice: formatPriceForWhatsApp(product.price),
                productCategory: product.category,
                productDescription: product.description,
                quantity: 1
            };

            const message = generateWhatsAppMessage(messageTemplate);
            openWhatsAppChat(message);
        } catch (error) {
            console.error('Error opening WhatsApp:', error);
            alert('Maaf, terjadi kesalahan saat membuka WhatsApp. Silakan coba lagi.');
        } finally {
            setTimeout(() => setIsLoading(false), 1000);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group w-full">
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Mobile-optimized badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 sm:flex-row sm:gap-2 sm:top-3 sm:left-3">
                    {product.ready && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Ready
            </span>
                    )}
                    {product.organic && (
                        <span className="bg-emerald-600 text-white text-xs px-1.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Leaf className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden sm:inline">Organic</span>
              <span className="sm:hidden">Org</span>
            </span>
                    )}
                </div>

                {/* Mobile-friendly overlay - only show on larger screens */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center hidden sm:flex">
                    <button
                        onClick={handleWhatsAppClick}
                        disabled={isLoading}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Opening...</span>
                            </>
                        ) : (
                            <>
                                <MessageCircle className="w-4 h-4" />
                                <span>Chat Now</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile-optimized content */}
            <div className="p-3 sm:p-5">
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2 line-clamp-2 leading-tight">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                {/* Mobile-optimized price section */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-green-600 leading-tight">
              {product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
            </span>
                        <span className="text-xs sm:text-sm text-gray-500">per {product.unit}</span>
                    </div>
                </div>

                {/* Mobile-optimized rating */}
                <div className="flex items-center mb-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                            />
                        ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">(4.8)</span>
                </div>

                {/* Mobile-optimized WhatsApp button */}
                <button
                    onClick={handleWhatsAppClick}
                    disabled={isLoading}
                    className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                >
                    {isLoading ? (
                        <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Opening...</span>
                        </>
                    ) : (
                        <>
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Order via WhatsApp</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}