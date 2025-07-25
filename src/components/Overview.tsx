import React from 'react';
import { Book, Package, ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Overview() {
    const cards = [
        {
            icon: Book,
            emoji: '📋',
            title: 'Pelajari',
            description: 'Pelajari lebih lanjut tentang Dusun Sidomulya, komunitas kami dan cerita yang membuat kami unik. Pelajari kekayaan warisan dan budaya kami.',
            href: '/village-stories',
            delay: 200,
        },
        {
            icon: Package,
            emoji: '🌾',
            title: 'Produk Kami',
            description: 'Pelajari Katalog Produk Kami.',
            href: '#products',
            delay: 400,
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Enhanced Vibrant Background with animated elements */}
            <div className="absolute inset-0 bg-gradient-to-tl from-green-500 via-emerald-400 to-green-400">
                {/* Enhanced animated shapes with better timing */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-green-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-lime-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Enhanced Pattern Overlay with wave effect */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='60' cy='60' r='4'/%3E%3Ccircle cx='0' cy='60' r='4'/%3E%3Ccircle cx='120' cy='60' r='4'/%3E%3Ccircle cx='60' cy='0' r='4'/%3E%3Ccircle cx='60' cy='120' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Floating geometric shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-white/30 rotate-45 animate-float"></div>
                    <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-float-delayed"></div>
                    <div className="absolute bottom-1/4 left-2/3 w-10 h-10 border-2 border-white/25 rounded-full animate-particle-float"></div>
                </div>
            </div>

            {/* Content with enhanced animations */}
            <div className="relative container mx-auto px-4">
                {/* Enhanced title with staggered animation */}
                <AnimatedElement animation="fade-up" delay={100}>
                    <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-20 drop-shadow-lg text-gradient-white">
                        Tentang Sidomulya
                    </h2>
                </AnimatedElement>

                {/* Enhanced cards grid with staggered animations */}
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {cards.map((card, index) => (
                        <AnimatedElement 
                            key={card.title}
                            animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                            delay={card.delay}
                        >
                            <div className="group relative">
                                <a 
                                    href={card.href} 
                                    className="block"
                                    onClick={card.href === '#products' ? (e) => {
                                        e.preventDefault();
                                        document.getElementById('products')?.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    } : undefined}
                                >
                                    <div className="glass-strong rounded-3xl p-8 shadow-2xl border border-white/30 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 card-hover group-hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.3)]">
                                        {/* Enhanced icon container with better effects */}
                                        <div className="relative mb-8 flex justify-center">
                                            <div className="relative bg-white/20 w-28 h-28 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                                <span className="text-6xl animate-float">{card.emoji}</span>
                                                
                                                {/* Rotating ring effect */}
                                                <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                                                <div className="absolute inset-2 border border-white/20 rounded-full animate-spin-slow-reverse"></div>
                                            </div>
                                        </div>

                                        {/* Enhanced content */}
                                        <div className="text-center">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-green-100 transition-colors duration-300">
                                                {card.title}
                                            </h3>
                                            <p className="text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                                                {card.description}
                                            </p>

                                            {/* Call to action arrow */}
                                            <div className="mt-6 flex justify-center">
                                                <ArrowRight className="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                                            </div>
                                        </div>

                                        {/* Hover overlay effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>

                {/* Decorative elements */}
                <AnimatedElement animation="fade-up" delay={600}>
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center space-x-4 text-white/60">
                            <div className="w-16 h-px bg-white/40"></div>
                            <span className="text-sm font-medium">Jelajahi Lebih Lanjut</span>
                            <div className="w-16 h-px bg-white/40"></div>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
}