import React, { useState } from 'react';
import { Filter, Grid } from 'lucide-react';
import ProductGrid from './ProductGrid';
import { products } from '../data/products.ts';
import AnimatedElement from './AnimatedElement';
import { useStaggeredAnimation } from '../hooks/useAnimations';

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(false);

    const categories = [
        { id: 'all', name: 'All', count: products.length },
        { id: 'ECO ENZYME', name: 'Eco Enzyme', count: products.filter(p => p.category === 'ECO ENZYME').length },
        { id: 'SUSU KAMBING', name: 'Susu Kambing', count: products.filter(p => p.category === 'SUSU KAMBING').length },
        { id: 'SABUN', name: 'Sabun', count: products.filter(p => p.category === 'SABUN').length },
        { id: 'ECOBRICK', name: 'Ecobrick', count: products.filter(p => p.category === 'ECOBRICK').length }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const visibleCategories = useStaggeredAnimation(categories, 100);

    const handleCategoryChange = (categoryId: string) => {
        if (categoryId === selectedCategory) return;
        
        setIsLoading(true);
        setTimeout(() => {
            setSelectedCategory(categoryId);
            setIsLoading(false);
        }, 300);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 py-24 relative overflow-hidden" id="products">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Enhanced Title */}
                <AnimatedElement animation="fade-up" delay={100}>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 text-gradient">
                            Our Products
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-lg">
                            Discover our carefully crafted collection of sustainable products
                        </p>
                    </div>
                </AnimatedElement>

                {/* Enhanced Category Filter */}
                <AnimatedElement animation="fade-up" delay={200}>
                    <div className="mb-12">
                        <div className="flex items-center justify-center mb-6">
                            <Filter className="w-5 h-5 text-green-600 mr-2" />
                            <span className="text-gray-700 font-medium">Filter by Category</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.slice(0, visibleCategories).map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    disabled={isLoading}
                                    className={`group relative px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                                        selectedCategory === category.id
                                            ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                                            : 'bg-white text-green-600 hover:bg-green-50 shadow-md hover:shadow-lg'
                                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <span className="relative z-10 font-medium">
                                        {category.name}
                                        <span className="ml-2 text-sm opacity-75">
                                            ({category.count})
                                        </span>
                                    </span>
                                    
                                    {/* Hover effect background */}
                                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? 'bg-green-700'
                                            : 'bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20'
                                    }`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimatedElement>

                {/* Enhanced Products Section */}
                <div className="relative">
                    {/* Loading State */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
                                <p className="text-green-600 font-medium">Loading products...</p>
                            </div>
                        </div>
                    )}

                    {/* Product Count and Status */}
                    <AnimatedElement animation="fade-up" delay={300}>
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-green-100">
                                <Grid className="w-4 h-4 text-green-600 mr-2" />
                                <span className="text-gray-700 font-medium">
                                    Showing <span className="text-green-600 font-semibold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                                    {selectedCategory !== 'all' && (
                                        <span className="text-gray-500 ml-2">
                                            in <span className="text-green-600">{categories.find(c => c.id === selectedCategory)?.name}</span>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </AnimatedElement>

                    {/* Products Grid */}
                    <AnimatedElement animation="fade-up" delay={400}>
                        <div className={`transition-all duration-500 ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                            <ProductGrid products={filteredProducts} />
                        </div>
                    </AnimatedElement>
                </div>

                {/* Call to Action */}
                <AnimatedElement animation="fade-up" delay={500}>
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center space-x-4 text-gray-500">
                            <div className="w-16 h-px bg-green-300"></div>
                            <span className="text-sm font-medium">Explore Our Sustainable Future</span>
                            <div className="w-16 h-px bg-green-300"></div>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
}