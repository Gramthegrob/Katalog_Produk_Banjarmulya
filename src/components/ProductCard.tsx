import React, { useState } from 'react';
import { Star, Leaf, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden perspective-1000">
      {/* Card Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative">
        {/* Enhanced Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
          )}
          
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Enhanced badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.ready && (
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg animate-fade-in">
                Ready
              </span>
            )}
            {product.organic && (
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 shadow-lg animate-fade-in animation-delay-200">
                <Leaf className="w-3 h-3" />
                Organic
              </span>
            )}
          </div>

          {/* Floating action buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-8 group-hover:translate-x-0">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110">
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Quick action overlay */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors duration-200 shadow-lg">
              <ShoppingCart className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        </div>
        
        {/* Enhanced Content */}
        <div className="p-6 relative">
          {/* Product name with hover effect */}
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1 group-hover:text-green-700 transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Description with fade effect */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Price section with enhanced styling */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                {product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
              </span>
              <span className="text-sm text-gray-500">per {product.unit}</span>
            </div>
            
            {/* Discount badge (if applicable) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                Fresh
              </span>
            </div>
          </div>

          {/* Enhanced rating section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">(4.8)</span>
            </div>
            
            {/* Stock indicator */}
            <div className="flex items-center text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              In Stock
            </div>
          </div>

          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none"></div>
        </div>
      </div>

      {/* Card border glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-500"></div>
    </div>
  );
}