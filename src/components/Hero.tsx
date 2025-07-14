import React from 'react';
import { Leaf, Sun, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Dari Banjarmulya
            <span className="block text-emerald-600">Langsung Ke Meja Anda</span>
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Temukan pilihan terbaik produk peternakan dari Banjarmulya. Kualitas yang terasa, keaslian yang bisa Anda percaya.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-green-700">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="font-medium">100% Organik</span>
            </div>
            <div className="flex items-center space-x-2 text-green-700">
              <Sun className="w-6 h-6 text-yellow-500" />
              <span className="font-medium">Segar Setiap Hari</span>
            </div>
            <div className="flex items-center space-x-2 text-green-700">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="font-medium">Produksi Lokal</span>
            </div>
          </div>

          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Belanja Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}