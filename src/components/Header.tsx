import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Sparkles, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', to: 'home', type: 'section' },
    { name: 'Overview', to: 'about', type: 'section' },
    { name: 'Products', to: 'products', type: 'section' },
    { name: 'Stories', to: '/village-stories', type: 'route' },
    { name: 'Contact', to: 'contact', type: 'section' },
  ];

  const handleNavigation = (item: any) => {
    if (item.type === 'route') {
      navigate(item.to);
    } else if (item.type === 'section') {
      if (!isHomePage) {
        // If not on home page, go to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.to);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      // If on home page, the ScrollLink will handle it
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavItem = (item: any, index: number) => {
    const baseClasses = `cursor-pointer font-medium transition-all duration-300 relative group px-4 py-2 rounded-full hover:bg-green-50 ${
        isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-green-800 hover:text-green-600'
    }`;

    const isActive = item.type === 'route'
        ? location.pathname === item.to
        : activeSection === item.to && isHomePage;

    const activeClasses = isActive ? 'text-green-600' : '';

    if (item.type === 'section' && isHomePage) {
      return (
          <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveSection(item.to)}
              className={`${baseClasses} ${activeClasses}`}
              style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.name}
            <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
            }`}></span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </ScrollLink>
      );
    } else {
      return (
          <button
              key={item.to}
              onClick={() => handleNavigation(item)}
              className={`${baseClasses} ${activeClasses}`}
              style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.name}
            <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
            }`}></span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
      );
    }
  };

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
            <RouterLink to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Leaf className={`w-8 h-8 transition-all duration-300 group-hover:animate-wave ${
                    isScrolled ? 'text-green-600' : 'text-green-800'
                }`} />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-green-400 animate-pulse" />
              </div>
              <span className={`font-bold text-2xl transition-all duration-300 group-hover:scale-105 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
              PawonSidomulyo
            </span>
            </RouterLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => renderNavItem(item, index))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                    isScrolled ? 'text-gray-700 hover:bg-green-50' : 'text-green-800 hover:bg-white/20'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-green-100 shadow-xl">
                <nav className="container mx-auto px-4 py-6 space-y-4">
                  {navItems.map((item, index) => (
                      <button
                          key={item.to}
                          onClick={() => handleNavigation(item)}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                      >
                        {item.name}
                      </button>
                  ))}
                </nav>
              </div>
          )}
        </div>
      </header>
  );
}