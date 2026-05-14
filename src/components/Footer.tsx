'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-700 to-pink-800 text-white">
      {/* Main Footer Content - Simplified */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Column 1: About - Simplified */}
          <div>
            <h5 className="text-lg sm:text-xl font-bold mb-3 text-white">HATORENA</h5>
            <p className="text-orange-100 text-sm leading-relaxed">
              Celana Sport Jogging Jogger premium - nyaman dipakai, bahan elastis, tersedia 4 warna. Rp 49.000/pcs!
            </p>
          </div>

          {/* Column 2: Contact - Simplified */}
          <div>
            <h5 className="text-lg font-bold mb-3 text-white">Hubungi Kami</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+628977572288" className="text-orange-100 hover:text-yellow-300">+62 897-757-2288</a>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@hatorena.com" className="text-orange-100 hover:text-yellow-300">contact@hatorena.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright - Simplified */}
      <div className="bg-gradient-to-r from-orange-800 to-pink-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-orange-100 text-xs sm:text-sm">
            © 2026 HATORENA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
