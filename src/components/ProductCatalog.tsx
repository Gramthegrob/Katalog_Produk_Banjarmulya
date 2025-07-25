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
        <section className="min-h-screen bg-green-50 py-24" id="products">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Our Products</h2>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-colors ${
                                selectedCategory === category.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-green-600 hover:bg-green-50'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div>
                    <div className="mb-8 text-center">
                        <p className="text-gray-600">
                            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </section>
    );
}