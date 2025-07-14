import React from 'react';
import { Leaf, Sun, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Farm Fresh
            <span className="block text-emerald-600">To Your Table</span>
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the finest selection of organic produce, dairy, and grains directly from our family farm. 
            Quality you can taste, freshness you can trust.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-green-700">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="font-medium">100% Organic</span>
            </div>
            <div className="flex items-center space-x-2 text-green-700">
              <Sun className="w-6 h-6 text-yellow-500" />
              <span className="font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2 text-green-700">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="font-medium">Family Owned</span>
            </div>
          </div>

          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}