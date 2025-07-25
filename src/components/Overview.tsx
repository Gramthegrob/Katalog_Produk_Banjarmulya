import React, { useEffect, useRef, useState } from 'react';
import { Book, Package } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Overview() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const cards = [
        {
            icon: Book,
            title: "Overview",
            description: "Pelajari lebih lanjut tentang Dusun Sidomulya, komunitas kami dan cerita yang membuat kami unik. Pelajari kekayaan warisan dan budaya kami.",
            href: "/village-stories",
            gradient: "from-blue-500 to-purple-600",
            type: "external"
        },
        {
            icon: Package,
            title: "Produk",
            description: "Jelajahi berbagai produk lokal dan hasil pertanian yang dihasilkan oleh masyarakat Sidomulya. Temukan kualitas terbaik dari tanah kami.",
            scrollTo: "products",
            gradient: "from-green-500 to-teal-600",
            type: "scroll"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden" id="about">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-tl from-green-500 via-emerald-400 to-green-400 animate-gradient">
                {/* Animated shapes with enhanced effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-green-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-float hover-glow"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed hover-glow"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-lime-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-bounce-gentle hover-glow"></div>
                </div>

                {/* Enhanced Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='0' cy='50' r='3'/%3E%3Ccircle cx='100' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <h2 className={`text-5xl md:text-6xl font-bold text-center text-white mb-20 drop-shadow-lg transition-all duration-1000 ${
                    isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    Tentang Sidomulya
                </h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className={`group transition-all duration-700 ${
                                    isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Conditional rendering based on card type */}
                                {card.type === "external" ? (
                                    <a href={card.href} className="block h-full">
                                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 h-full transform transition-all duration-500 hover:-translate-y-4 hover:bg-white/20 hover:shadow-3xl hover-glow group">
                                            {/* Icon with enhanced animations */}
                                            <div className={`bg-gradient-to-br ${card.gradient} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                                                <Icon className="w-12 h-12 text-white group-hover:animate-bounce-gentle" />
                                            </div>

                                            <h3 className="text-3xl font-semibold mb-6 text-white text-center group-hover:text-green-100 transition-colors duration-300">
                                                {card.title}
                                            </h3>

                                            <p className="text-white/90 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                                                {card.description}
                                            </p>

                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>
                                    </a>
                                ) : (
                                    <Link
                                        to={card.scrollTo!}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={800}
                                        className="block h-full cursor-pointer"
                                    >
                                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 h-full transform transition-all duration-500 hover:-translate-y-4 hover:bg-white/20 hover:shadow-3xl hover-glow group">
                                            {/* Icon with enhanced animations */}
                                            <div className={`bg-gradient-to-br ${card.gradient} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                                                <Icon className="w-12 h-12 text-white group-hover:animate-bounce-gentle" />
                                            </div>

                                            <h3 className="text-3xl font-semibold mb-6 text-white text-center group-hover:text-green-100 transition-colors duration-300">
                                                {card.title}
                                            </h3>

                                            <p className="text-white/90 text-center leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                                                {card.description}
                                            </p>

                                            {/* Scroll indicator for products card */}
                                            <div className="flex justify-center mt-6">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
                                                        <span className="block w-2 h-2 bg-white/60 rounded-full group-hover:bg-white group-hover:animate-bounce-gentle transition-colors duration-300"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Enhanced bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </section>
    );
}