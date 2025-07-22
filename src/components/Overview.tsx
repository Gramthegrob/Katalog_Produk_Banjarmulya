export default function Overview() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Vibrant Background */}
            <div className="absolute inset-0 bg-gradient-to-tl from-green-500 via-emerald-400 to-green-400">
                {/* Animated shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='0' cy='50' r='3'/%3E%3Ccircle cx='100' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-20 drop-shadow-lg">
                    About Banjarmulya
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="group">
                        <a href="/village-stories" className="block">
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
                                <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-5xl">📋</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Overview</h3>
                                <p className="text-white/90 text-center leading-relaxed">
                                    Learn more about Banjarmulya village, our community, and the stories that make our village unique. Discover our rich heritage and vibrant culture.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="group">
                        <a href="#products" className="block" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('products')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
                                <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-5xl">🌾</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-white text-center">Our Products</h3>
                                <p className="text-white/90 text-center leading-relaxed">
                                    Discover our wide range of agricultural products. From fresh vegetables to premium rice varieties, explore our complete product catalog.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}