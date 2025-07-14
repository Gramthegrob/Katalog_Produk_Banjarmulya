import React from 'react';
import { Search, Phone } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">F</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-green-800">FreshHarvest</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:block font-medium">(555) 123-FARM</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}