import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock, Leaf, Heart } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Jl. Contoh Alamat, Kota Ngawur, ID 12345' },
    { icon: Phone, text: '(021) 1234-5678' },
    { icon: Mail, text: 'halo@emailboongan.com' },
  ];

  return (
      <footer className="relative bg-green-800 text-green-100 py-16 mt-16 overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0">
          {/* Main wave */}
          <svg
            className="absolute bottom-0 w-full h-24 text-green-700"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="currentColor"
              className="animate-wave"
            />
          </svg>
          
          {/* Secondary wave */}
          <svg
            className="absolute bottom-0 w-full h-20 text-green-600 opacity-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
              className="animate-wave"
              style={{ animationDelay: '2s', animationDuration: '25s' }}
            />
          </svg>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <Leaf className="absolute top-1/4 left-1/6 w-6 h-6 text-green-600 opacity-30 animate-float" />
            <Heart className="absolute top-1/3 right-1/4 w-4 h-4 text-green-500 opacity-40 animate-float-delayed" />
            <Leaf className="absolute bottom-1/3 left-1/3 w-5 h-5 text-green-600 opacity-25 animate-particle-float" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <AnimatedElement animation="fade-up" delay={100}>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Info Perusahaan
                  </h4>
                  <p className="mb-6 leading-relaxed text-green-200">
                    Ini adalah contoh teks acak yang tidak memiliki arti, hanya sebagai pengisi di bagian footer. Silakan abaikan saja tulisan ini karena memang tidak penting.
                  </p>
                </div>

                {/* Enhanced Social Links */}
                <div>
                  <h5 className="font-semibold mb-4 text-white">Follow Us</h5>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <AnimatedElement
                        key={social.label}
                        animation="scale"
                        delay={200 + index * 100}
                        as="button"
                        className={`group relative p-3 bg-green-700 rounded-full text-green-200 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-900/50 cursor-pointer`}
                      >
                        <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Contact Info */}
            <AnimatedElement animation="fade-up" delay={200}>
              <div>
                <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Info Kontak
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <AnimatedElement
                      key={index}
                      animation="slide-left"
                      delay={300 + index * 100}
                      className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors duration-300"
                    >
                      <div className="p-2 bg-green-700 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                        <info.icon className="w-4 h-4 text-green-300" />
                      </div>
                      <span className="text-green-100">{info.text}</span>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            {/* Operating Hours */}
            <AnimatedElement animation="fade-up" delay={300}>
              <div>
                <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Jam Operasional
                </h4>
                <div className="space-y-3">
                  <AnimatedElement animation="slide-right" delay={400}>
                    <div className="flex items-start space-x-3 group">
                      <div className="p-2 bg-green-700 rounded-lg mt-1">
                        <Clock className="w-4 h-4 text-green-300" />
                      </div>
                      <div className="text-green-100 space-y-1">
                        <div className="hover:text-white transition-colors duration-300">Senin - Jumat: 08.00 - 18.00</div>
                        <div className="hover:text-white transition-colors duration-300">Sabtu: 08.00 - 17.00</div>
                        <div className="hover:text-white transition-colors duration-300">Minggu: 09.00 - 16.00</div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Enhanced Copyright */}
          <AnimatedElement animation="fade-up" delay={500}>
            <div className="border-t border-green-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left text-sm text-green-200 mb-4 md:mb-0">
                  © 2025 Perusahaan Contoh. Semua hak dilindungi. 
                  <span className="inline-flex items-center ml-2 text-green-300">
                    Made with <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" /> in Indonesia
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-green-300">
                  <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </footer>
  );
}