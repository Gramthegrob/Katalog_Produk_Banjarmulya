import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import { products } from '../data/products.ts';
import { Product } from '../types/Product';

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'ECO ENZYME', name: 'Eco Enzyme' },
        { id: 'SUSU KAMBING', name: 'Susu Kambing' },
        { id: 'SABUN', name: 'Sabun' },
        { id: 'Batako', name: 'Batako' }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <section className="min-h-screen bg-green-50 py-12 sm:py-16 lg:py-24" id="products">
            <div className="container mx-auto px-4">
                {/* Mobile-optimized title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-800 mb-8 sm:mb-12 lg:mb-16 px-4">
                    Our Products
                </h2>

                {/* Mobile-optimized category filter */}
                <div className="mb-8 sm:mb-12">
                    {/* Mobile: Horizontal scroll */}
                    <div className="sm:hidden">
                        <div className="flex gap-3 overflow-x-auto pb-2 px-4 -mx-4 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors flex-shrink-0 ${
                                        selectedCategory === category.id
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white text-green-600 hover:bg-green-50 border border-green-200'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Flex wrap */}
                    <div className="hidden sm:flex flex-wrap gap-3 lg:gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base ${
                                    selectedCategory === category.id
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white text-green-600 hover:bg-green-50'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div>
                    <div className="mb-6 sm:mb-8 text-center">
                        <p className="text-sm sm:text-base text-gray-600">
                            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>

            {/* Custom scrollbar hiding */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}