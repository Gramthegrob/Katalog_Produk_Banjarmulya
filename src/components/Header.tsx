import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Leaf, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Overview', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                  ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-green-100'
                  : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Leaf className={`w-8 h-8 transition-all duration-300 group-hover:animate-wave ${
                    isScrolled ? 'text-green-600' : 'text-green-800'
                }`} />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-green-400 animate-pulse" />
              </div>
              <span className={`font-bold text-2xl transition-all duration-300 group-hover:scale-105 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
              PawonSidomulyo
            </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                  <Link
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onSetActive={() => setActiveSection(item.to)}
                      className={`cursor-pointer font-medium transition-all duration-300 relative group px-4 py-2 rounded-full hover:bg-green-50 ${
                          isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-green-800 hover:text-green-600'
                      } ${activeSection === item.to ? 'text-green-600' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                    {/* Fixed centered underline animation */}
                    <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                        activeSection === item.to ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 hover:bg-green-50 ${
                    isScrolled ? 'text-gray-700' : 'text-green-800'
                }`}
            >
              {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
              ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="py-4 space-y-2">
              {navItems.map((item, index) => (
                  <Link
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:translate-x-2 animate-slide-in-left ${
                          isScrolled ? 'text-gray-700' : 'text-green-800'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
  );
}