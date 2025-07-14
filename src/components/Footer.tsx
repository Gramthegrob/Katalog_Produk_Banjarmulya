import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
      <footer className="bg-green-800 text-green-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">Info Perusahaan</h4>
              <p className="mb-4">
                Ini adalah contoh teks acak yang tidak memiliki arti, hanya sebagai pengisi di bagian footer. Silakan abaikan saja tulisan ini karena memang tidak penting.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-green-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Info Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">Jl. Contoh Alamat, Kota Ngawur, ID 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">(021) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">halo@emailboongan.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-300" />
                  <div className="text-green-100">
                    <div>Senin - Jumat: 08.00 - 18.00</div>
                    <div>Sabtu: 08.00 - 17.00</div>
                    <div>Minggu: 09.00 - 16.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-12 pt-6 text-center text-sm text-green-200">
            © 2025 Perusahaan Contoh. Semua hak dilindungi. Teks ngasal di sini juga!
          </div>
        </div>
      </footer>
  );
}