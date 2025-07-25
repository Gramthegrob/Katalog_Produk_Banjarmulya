import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import { useParallax } from '../hooks/useScrollEffects';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  const parallaxOffset = useParallax(0.5);

  return (
      <section className="min-h-screen relative overflow-hidden">
        {/* Enhanced Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-200 parallax"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Enhanced animated circles with better effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-green-300/60 rounded-full mix-blend-multiply animate-blob"></div>
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-300/60 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-lime-300/60 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {/* Large particles */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-particle-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-200/40 rounded-full animate-particle-float-delayed"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-200/50 rounded-full animate-particle-float-delayed-2"></div>
            <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-lime-200/30 rounded-full animate-particle-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-particle-float-delayed"></div>
            
            {/* Small sparkle particles */}
            <Sparkles className="absolute top-1/6 left-1/6 w-6 h-6 text-white/40 animate-pulse" />
            <Sparkles className="absolute top-2/3 right-1/6 w-4 h-4 text-emerald-200/60 animate-pulse animation-delay-1000" />
            <Sparkles className="absolute bottom-1/6 left-2/3 w-5 h-5 text-green-200/50 animate-pulse animation-delay-2000" />
          </div>

          {/* Enhanced pattern overlay with dynamic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Content section with enhanced animations */}
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Main content with staggered animations */}
            <div className="text-center space-y-8">
              {/* Enhanced heading with fade-in animations */}
              <AnimatedElement animation="fade-up" delay={200}>
                <h1 className="inline-block">
                  <AnimatedElement animation="scale" delay={400} as="span" className="block text-5xl md:text-7xl font-black text-green-900 mb-4 text-gradient">
                    Sidomulya
                  </AnimatedElement>
                  <AnimatedElement animation="fade-up" delay={600} as="span" className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-700 bg-clip-text text-transparent">
                    Warisan Manis, Hidup Agraris
                  </AnimatedElement>
                </h1>
              </AnimatedElement>

              {/* Enhanced description with fade-in */}
              <AnimatedElement animation="fade-up" delay={800}>
                <p className="text-lg md:text-xl text-green-800 font-medium max-w-2xl mx-auto leading-relaxed">
                  Di bawah bayangan cerobong tua pabrik gula Sidomulyo, kehidupan terus mengalir. Warga menata harapan lewat cangkul dan kandang, menjaga warisan, dan membangun hari esok dari tanah yang sama.
                </p>
              </AnimatedElement>

              {/* Enhanced CTA button with shimmer effect */}
              <AnimatedElement animation="scale" delay={1000}>
                <div className="mt-12">
                  <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      className="inline-block"
                  >
                    <button className="group relative bg-green-900 text-white px-8 py-3 rounded-full font-medium text-lg btn-hover card-hover transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 animate-pulse-glow">
                      <span className="relative z-10 flex items-center gap-2">
                        <Leaf className="w-5 h-5 transition-transform group-hover:rotate-12" />
                        <span>Pelajari Lebih Lanjut</span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>

        {/* Enhanced overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none"></div>
        
        {/* Scroll indicator */}
        <AnimatedElement 
          animation="fade-up" 
          delay={1200}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-green-700 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-700 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </AnimatedElement>
      </section>
  );
}