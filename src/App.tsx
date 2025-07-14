import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <Hero />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Fresh Products</h2>
                    <p className="text-gray-600">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
                    </p>
                </div>
                <ProductGrid products={filteredProducts.slice(0, 4)} />
            </main>
            <Footer />
        </div>
    );
}