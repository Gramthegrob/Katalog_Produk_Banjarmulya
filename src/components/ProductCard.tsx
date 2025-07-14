import React from 'react';
import { Star, Leaf } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.inSeason && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              In Season
            </span>
          )}
          {product.organic && (
            <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Organic
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">per {product.unit}</span>
          </div>
        </div>
        
        <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.8)</span>
        </div>
      </div>
    </div>
  );
}