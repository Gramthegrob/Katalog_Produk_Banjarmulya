import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Leaf, Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollEffects';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

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

  const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'Overview' },
    { to: 'products', label: 'Products' },
  ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
              scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'
          } ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
                : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo with animation */}
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Leaf className={`w-8 h-8 transition-all duration-300 group-hover:rotate-12 ${
                    isScrolled ? 'text-green-600' : 'text-green-800'
                }`} />
                <div className="absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className={`font-bold text-xl transition-all duration-300 ${
                  isScrolled ? 'text-green-800' : 'text-green-800'
              } hover:text-green-600 cursor-pointer text-gradient`}>
                PawonSidomulyo
              </span>
            </div>

            {/* Enhanced Navigation Links for Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`relative px-4 py-2 rounded-lg cursor-pointer font-medium transition-all duration-300 group ${
                      isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-green-800 hover:text-green-600'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-green-50' : 'text-green-800 hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-rotate-in" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer slide-left-on-scroll ${
                    isMobileMenuOpen ? 'in-view' : ''
                  } ${
                    isScrolled ? 'text-gray-700 hover:bg-green-50' : 'text-green-800 hover:bg-white/10'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
  );
}