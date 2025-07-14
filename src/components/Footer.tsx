import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold">FreshHarvest</h3>
            </div>
            <p className="text-green-100 mb-4">
              Your trusted source for fresh, organic farm products. From our family farm to your table.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-300" />
                <span className="text-green-100">123 Farm Road, Green Valley, CA 95123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300" />
                <span className="text-green-100">(555) 123-FARM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <span className="text-green-100">hello@freshharvest.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Farm Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-300" />
                <div className="text-green-100">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 5:00 PM</div>
                  <div>Sunday: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2025 FreshHarvest Farm. All rights reserved. | Made with 💚 for fresh food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}