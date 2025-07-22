interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="/" className="text-xl font-bold text-green-600">
                            Banjarmulya
                        </a>
                        <div className="flex space-x-4">
                            <a href="/" className="text-gray-600 hover:text-green-600">
                                Home
                            </a>
                            <a href="/village-stories" className="text-gray-600 hover:text-green-600">
                                Village Stories
                            </a>
                            <a href="/#products" className="text-gray-600 hover:text-green-600">
                                Products
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 Banjarmulya. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}