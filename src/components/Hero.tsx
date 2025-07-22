import React from 'react';
import { Leaf, Sun, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
      <section className="min-h-screen relative overflow-hidden">
        {/* Background with improved gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-200">
          {/* Refined animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-green-300/60 rounded-full mix-blend-multiply animate-float"></div>
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-300/60 rounded-full mix-blend-multiply animate-float-delayed"></div>
            <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-lime-300/60 rounded-full mix-blend-multiply animate-float"></div>
          </div>

          {/* Enhanced pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Content section with improved text placement */}
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Main content with enhanced spacing and typography */}
            <div className="text-center space-y-8">
              {/* Refined heading with better visual hierarchy */}
              <h1 className="inline-block">
              <span className="block text-5xl md:text-7xl font-black text-green-900 mb-2">
                Sidomulya
              </span>
                <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent">
                Warisan Manis, Hidup Agraris
              </span>
              </h1>

              {/* Refined description with better readability */}
              <p className="text-lg md:text-xl text-green-800 font-medium max-w-2xl mx-auto leading-relaxed">
                Di bawah bayangan cerobong tua pabrik gula Sidomulyo, kehidupan terus mengalir. Warga menata harapan lewat cangkul dan kandang, menjaga warisan, dan membangun hari esok dari tanah yang sama.
              </p>

              {/* Enhanced feature badges with better spacing and hover effects */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                    <Leaf className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">100% Organik</span>
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                    <Sun className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Segar Setiap Hari</span>
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                    <Heart className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Produksi Lokal</span>
                  </div>
                </div>
              </div>

              {/* Refined CTA button with smooth transition */}
              <div className="mt-12">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="inline-block"
                >
                  <button className="group relative bg-green-900 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <span>Pelajari Lebih Lanjut</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
      </section>
  );
}