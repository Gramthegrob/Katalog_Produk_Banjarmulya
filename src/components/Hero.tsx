import React, { useEffect, useState } from 'react';
import { Leaf, Sun, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <section className="min-h-screen relative overflow-hidden" id="home">
        {/* Enhanced Background with Parallax */}
        <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-200 animate-gradient"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Floating Particles - Reduced for mobile performance */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-float ${
                        i % 2 === 0 ? 'animate-float-delayed' : ''
                    } ${i > 3 ? 'hidden sm:block' : ''}`} // Hide some particles on mobile
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}
          </div>

          {/* Animated Circles - Optimized for mobile */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-green-300/30 sm:bg-green-300/40 rounded-full mix-blend-multiply animate-float hover-glow"></div>
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-300/30 sm:bg-emerald-300/40 rounded-full mix-blend-multiply animate-float-delayed hover-glow"></div>
            <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-lime-300/30 sm:bg-lime-300/40 rounded-full mix-blend-multiply animate-bounce-gentle hover-glow"></div>
          </div>

          {/* Enhanced Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Content section with enhanced animations */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-3 sm:px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Image container with enhanced effects - Mobile optimized */}
            <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover-lift transition-all duration-700 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}>
              {/* Background Image - Mobile optimized heights */}
              <img
                  src="/images/images/sumberharjo.jpg"
                  alt="Sumberharjo Village"
                  className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Decorative Elements - Responsive sizing */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 animate-pulse" />
              </div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 animate-wave" />
              </div>

              {/* Text content with staggered animations - Mobile optimized */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
                <div className="space-y-4 sm:space-y-6">
                  {/* Main heading with enhanced animations - Mobile typography */}
                  <h1 className="space-y-1 sm:space-y-2">
                  <span className={`block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-green-300 drop-shadow-lg transition-all duration-1000 ${
                      isVisible ? 'animate-slide-in-up stagger-1' : 'opacity-0 translate-y-10'
                  }`}>
                    Sidomulyo
                  </span>
                    <span className={`block text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-green-200 drop-shadow-lg transition-all duration-1000 ${
                        isVisible ? 'animate-slide-in-up stagger-2' : 'opacity-0 translate-y-10'
                    }`}>
                    Warisan Manis, Hidup Agraris
                  </span>
                  </h1>

                  {/* Description with fade-in animation - Mobile optimized */}
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed drop-shadow-md transition-all duration-1000 px-2 sm:px-0 ${
                      isVisible ? 'animate-fade-in stagger-3' : 'opacity-0'
                  }`}>
                    Di bawah bayangan cerobong tua pabrik gula Sumberharjo, kehidupan terus mengalir. Warga menata harapan lewat cangkul dan kandang, menjaga warisan, dan membangun hari esok dari tanah yang sama.
                  </p>

                  {/* Enhanced CTA button - Mobile touch-friendly */}
                  <div className={`pt-4 sm:pt-6 transition-all duration-1000 ${
                      isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0 translate-y-10'
                  }`}>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={800}
                        className="inline-block"
                    >
                      <button className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 animate-pulse-glow min-h-[44px] min-w-[44px]">
                      <span className="flex items-center gap-2 sm:gap-3">
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin transition-all duration-300" />
                        <span className="whitespace-nowrap">Pelajari Lebih Lanjut</span>
                        <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </span>
                        {/* Button shine effect */}
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
      </section>
  );
}