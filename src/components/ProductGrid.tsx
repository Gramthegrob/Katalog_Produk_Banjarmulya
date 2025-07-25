import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';
import AnimatedElement from './AnimatedElement';
import { Search } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <AnimatedElement animation="scale" delay={200}>
        <div className="text-center py-16">
          <div className="mb-6">
            <div className="relative inline-block">
              <Search className="w-24 h-24 text-gray-300 mx-auto" />
              <div className="absolute inset-0 bg-gray-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products found</h3>
          <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria</p>
          <div className="mt-8 flex justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View All Products
            </button>
          </div>
        </div>
      </AnimatedElement>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <AnimatedElement
          key={product.id}
          animation="scale"
          delay={index * 100}
          className="h-full"
        >
          <ProductCard product={product} />
        </AnimatedElement>
      ))}
    </div>
  );
}