import React from 'react';

export default function Header({ searchTerm, onSearchChange }) {
  return (
      <header className="bg-white shadow-sm py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo di kiri atas */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-green-800">NamaBrand</span>
            </a>
          </div>
          {/* Search bar */}
          <div className="flex-1 mx-8 max-w-xl">
            <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          {/* Akan ada gambar di kanan atas di sini */}
          <div className="flex items-center space-x-4">
            {/* Ganti src dan alt sesuai kebutuhan saat gambar sudah siap */}
            {/* <img src="/kanan.png" alt="Gambar Kanan" className="h-10 w-auto" /> */}
          </div>
        </div>
      </header>
  );
}