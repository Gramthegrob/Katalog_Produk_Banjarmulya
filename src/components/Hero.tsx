import React from 'react';
import { Leaf, Sun, Heart } from 'lucide-react';
import { Link } from 'react-scroll'; // Make sure react-scroll is installed

export default function Hero() {
  return (
      <section className="min-h-screen relative overflow-hidden">
        {/* Background layers remain the same */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-200">
          {/* Animated circles and pattern overlay remain the same */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-green-300 rounded-full mix-blend-multiply animate-float opacity-60"></div>
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-300 rounded-full mix-blend-multiply animate-float-delayed opacity-60"></div>
            <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-lime-300 rounded-full mix-blend-multiply animate-float opacity-60"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content section */}
        <div className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-black text-green-900 mb-6 tracking-tight leading-tight">
              Sidomulya<br />
              <span className="bg-gradient-to-r from-emerald-900 to-green-900 bg-clip-text text-transparent">
              Warisan Manis, Hidup Agraris
            </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-900 font-medium mb-12 max-w-2xl mx-auto">
              Di bawah bayangan cerobong tua pabrik gula Sidomulyo, kehidupan terus mengalir.
              <span className="block mt-2 font-semibold">
              Warga menata harapan lewat cangkul dan kandang, menjaga warisan, dan membangun hari esok dari tanah yang sama.
            </span>
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                <Leaf className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">100% Organik</span>
              </div>
              <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                <Sun className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Segar Setiap Hari</span>
              </div>
              <div className="flex items-center gap-2 bg-green-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:bg-green-800/90 transition-all">
                <Heart className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Produksi Lokal</span>
              </div>
            </div>

            {/* Updated button with react-scroll Link */}
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="inline-block cursor-pointer"
            >
              <button className="group relative bg-green-900 text-white px-8 py-2.5 rounded-full font-medium text-base hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-102 flex items-center gap-2">
                <span>Pelajari Lebih Lanjut</span>
                <span className="transform group-hover:translate-y-0.5 transition-transform">
              </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Optional overlay remains the same */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
      </section>
  );
}