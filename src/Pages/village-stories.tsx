import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VillageStories() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-green-600 text-white py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-6">About Banjarmulya Village</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Discover the story of our vibrant agricultural community
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-96 w-full relative">
                        <img
                            src="/images/village-hero.jpg"
                            alt="Banjarmulya Village Panorama"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-12 space-y-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                The Heart of Agricultural Excellence
                            </h2>

                            <p className="mb-6">
                                Nestled in the fertile lands of Indonesia, Banjarmulya has established itself as a beacon of agricultural excellence and community spirit. Our village's name, combining "Banjar" (settlement) and "Mulya" (prosperity), reflects the fundamental values that have guided our community through generations.
                            </p>

                            <div className="my-12 grid grid-cols-2 gap-8">
                                <img
                                    src="/images/farming.jpg"
                                    alt="Traditional Farming Methods"
                                    className="rounded-lg shadow-md"
                                />
                                <img
                                    src="/images/harvest.jpg"
                                    alt="Harvest Season"
                                    className="rounded-lg shadow-md"
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Agricultural Heritage
                            </h3>
                            <p className="mb-6">
                                At the heart of Banjarmulya's identity lies our deep-rooted agricultural tradition. Our farmers blend time-honored practices with modern techniques, ensuring sustainable cultivation while meeting contemporary market demands. This harmonious approach has enabled us to produce some of the region's finest agricultural products.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Community Spirit
                            </h3>
                            <p className="mb-6">
                                The spirit of gotong royong (mutual cooperation) runs deep in Banjarmulya. Our community regularly comes together for various activities, from planting and harvest festivals to collaborative farming initiatives. This strong sense of unity has been key to our village's continued growth and success.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Sustainable Practices
                            </h3>
                            <p className="mb-6">
                                Environmental stewardship is a cornerstone of our farming philosophy. We implement sustainable agricultural practices that protect our natural resources while ensuring optimal crop yields. Our farmers are trained in eco-friendly techniques that minimize environmental impact while maximizing productivity.
                            </p>

                            <div className="my-12">
                                <img
                                    src="/images/community.jpg"
                                    alt="Community Gathering"
                                    className="w-full rounded-lg shadow-md"
                                />
                                <p className="text-sm text-gray-600 mt-2 text-center">
                                    Annual harvest celebration bringing together the entire Banjarmulya community
                                </p>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Looking Forward
                            </h3>
                            <p>
                                As we continue to grow and evolve, Banjarmulya remains committed to its agricultural heritage while embracing innovation. We invite you to explore our products and experience the quality that comes from generations of farming excellence combined with modern sustainable practices.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => navigate('/#products')}
                                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-lg"
                            >
                                Explore Our Products
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}