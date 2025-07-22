import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Make sure to install react-scroll package

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                  src="/Logo"
                  alt="Banjarmulya Logo"
                  className="h-10"
              />
              <span className={`font-semibold text-xl ${
                  isScrolled ? 'text-green-800' : 'text-green-800'
              }`}>
              NamaBrand
            </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`cursor-pointer font-medium hover:text-green-600 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-green-800'
                  }`}
              >
                Home
              </Link>
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`cursor-pointer font-medium hover:text-green-600 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-green-800'
                  }`}
              >
                Overview
              </Link>
              <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`cursor-pointer font-medium hover:text-green-600 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-green-800'
                  }`}
              >
                Products
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="flex items-center gap-4">
              <input
                  type="search"
                  placeholder="Cari produk..."
                  className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 w-48 md:w-64"
              />
            </div>
          </div>
        </div>
      </header>
  );
}