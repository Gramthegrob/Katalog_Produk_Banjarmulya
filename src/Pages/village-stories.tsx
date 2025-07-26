import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, BookOpen, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Story {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    slug: string;
}

const stories: Story[] = [
    {
        id: 1,
        title: "Sejarah Dusun Sidomulya",
        excerpt: "Perjalanan panjang Dusun Sidomulya dari masa kolonial hingga era modern, termasuk peran penting pabrik gula Sumberharjo dalam membentuk identitas dan karakter masyarakat setempat.",
        date: "15 Maret 2024",
        author: "Pak Suroto",
        image: "/src/images/sumberharjo.jpg",
        category: "Sejarah",
        slug: "sejarah-dusun-sidomulya"
    },
    {
        id: 2,
        title: "Etnografi Dusun Sidomulya",
        excerpt: "Kajian mendalam tentang budaya, adat istiadat, dan kehidupan sosial masyarakat Sidomulya. Eksplorasi tradisi yang masih lestari dan adaptasi terhadap perubahan zaman.",
        date: "22 Februari 2024",
        author: "Dr. Siti Rahayu",
        image: "/src/images/WhatsApp Image 2025-07-23 at 13.11.28_8d47d2f8.jpg",
        category: "Etnografi",
        slug: "etnografi-dusun-sidomulya"
    }
];

export default function VillageStories() {
    const [currentStory, setCurrentStory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

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

    const nextStory = () => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStoryData = stories[currentStory];

    const handleReadMore = () => {
        navigate(`/village-stories/${currentStoryData.slug}`);
    };

    const handleStoryClick = (slug: string) => {
        navigate(`/village-stories/${slug}`);
    };

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-float filter blur-2xl"></div>
                <div className="absolute top-40 right-16 w-24 h-24 bg-emerald-300/40 rounded-full animate-float-delayed filter blur-xl"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-lime-200/20 rounded-full animate-bounce-gentle filter blur-3xl"></div>

                {/* Sparkle Effects */}
                <div className="absolute top-1/4 left-1/3">
                    <Sparkles className="w-6 h-6 text-green-300/60 animate-pulse" />
                </div>
                <div className="absolute top-3/4 right-1/4">
                    <Sparkles className="w-4 h-4 text-emerald-400/70 animate-bounce-gentle" />
                </div>
                <div className="absolute top-1/2 left-1/6">
                    <BookOpen className="w-5 h-5 text-green-400/50 animate-float" />
                </div>
            </div>

            {/* Enhanced Pattern Overlay */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0L80 12v2L54 40h-2zm4 0L80 16v2L58 40h-2zm4 0L80 20v2L62 40h-2zm4 0L80 24v2L66 40h-2zm4 0L80 28v2L70 40h-2zm4 0L80 32v2L74 40h-2zm4 0L80 36v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative container mx-auto px-4">
                {/* Enhanced Section Header */}
                <div className="text-center mb-20">
                    <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${
                        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-500 animate-shimmer"></div>
                        <BookOpen className="w-8 h-8 text-green-600 animate-pulse" />
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-green-500 animate-shimmer"></div>
                    </div>

                    <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
                        isVisible ? 'animate-slide-in-up stagger-1' : 'opacity-0 translate-y-10'
                    }`}>
                        Cerita Desa
                    </h2>

                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
                        isVisible ? 'animate-fade-in stagger-2' : 'opacity-0'
                    }`}>
                        Jelajahi sejarah dan budaya yang kaya dari Dusun Sidomulya melalui kajian sejarah dan etnografi yang mendalam.
                    </p>
                </div>

                {/* Enhanced Story Carousel */}
                <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in stagger-3' : 'opacity-0 scale-95'
                }`}>
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover-lift">
                        {/* Enhanced Story Image */}
                        <div className="relative h-80 md:h-96 overflow-hidden">
                            <img
                                src={currentStoryData.image}
                                alt={currentStoryData.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            {/* Enhanced Category Badge */}
                            <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 animate-pulse-glow">
                  {currentStoryData.category}
                </span>
                            </div>

                            {/* Enhanced Navigation Buttons */}
                            <button
                                onClick={prevStory}
                                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-x-1 backdrop-blur-sm border border-white/50 group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:animate-bounce-gentle" />
                            </button>
                            <button
                                onClick={nextStory}
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:translate-x-1 backdrop-blur-sm border border-white/50 group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:animate-bounce-gentle" />
                            </button>

                            {/* Enhanced Story Title Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                                    {currentStoryData.title}
                                </h3>
                                <div className="flex items-center gap-6 text-white/90">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{currentStoryData.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm">{currentStoryData.author}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Story Content */}
                        <div className="p-8 md:p-12 bg-gradient-to-br from-white to-green-50/30">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl">
                                {currentStoryData.excerpt}
                            </p>

                            {/* Single Action Button */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleReadMore}
                                    className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 animate-pulse-glow"
                                >
                                    <BookOpen className="w-5 h-5 group-hover:animate-bounce-gentle" />
                                    <span>Baca Selengkapnya</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Story Indicators */}
                    <div className="flex justify-center mt-8 gap-3">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentStory(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentStory
                                        ? 'w-12 h-3 bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse-glow'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-green-400 hover:scale-125'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Enhanced Additional Story Preview */}
                <div className={`mt-20 transition-all duration-1000 ${
                    isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0 translate-y-10'
                }`}>
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Artikel Lainnya
                    </h3>

                    <div className="flex justify-center">
                        {stories.filter((_, index) => index !== currentStory).map((story, index) => (
                            <button
                                key={story.id}
                                onClick={() => handleStoryClick(story.slug)}
                                className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover-glow max-w-md"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                    <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {story.category}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6 text-left">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                        {story.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {story.excerpt.substring(0, 120)}...
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{story.date}</span>
                                        <span>{story.author}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}