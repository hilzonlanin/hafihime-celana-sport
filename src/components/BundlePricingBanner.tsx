'use client';

import React from 'react';

interface BundlePricingBannerProps {
  position: 'top' | 'bottom';
}

const BundlePricingBanner: React.FC<BundlePricingBannerProps> = ({ position }) => {
  const bundles = [
    { qty: 5, price: 59000, original: 75000, savings: 16000 },
    { qty: 8, price: 99000, original: 120000, savings: 21000 },
    { qty: 10, price: 115500, original: 150000, savings: 34500 }
  ];

  return (
    <div className={`${position === 'top' ? 'bg-gradient-to-br from-orange-500 to-pink-600' : 'bg-gradient-to-br from-orange-100 to-pink-100'} py-6 sm:py-8`}>
      <div className="container mx-auto px-4">
        {position === 'top' ? (
          <>
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2">
                🔥 PROMO BUNDLING SPESIAL 🔥
              </h2>
              <p className="text-orange-100 text-sm sm:text-base">
                Beli lebih banyak, lebih hemat! Cocok untuk stok pribadi atau jualan lagi.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {bundles.map((bundle, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-white font-bold text-sm sm:text-base">Paket {bundle.qty} Pcs</p>
                  <p className="text-orange-200 line-through text-xs sm:text-sm">Rp {bundle.original.toLocaleString('id-ID')}</p>
                  <p className="text-white font-extrabold text-lg sm:text-xl">Rp {bundle.price.toLocaleString('id-ID')}</p>
                  <p className="text-yellow-300 font-semibold text-xs">HEMAT Rp {bundle.savings.toLocaleString('id-ID')}!</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="#bundling"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-orange-600 font-bold text-sm sm:text-base rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                👇 LIHAT PAKET BUNDLING 👇
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                💰 HEMAT LEBIH BANYAK DENGAN BUNDLING!
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Jangan lewatkan promo spesial hari ini!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {bundles.map((bundle, idx) => (
                <div key={idx} className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-md border-2 border-orange-300">
                  <p className="text-gray-900 font-bold text-sm sm:text-base">Paket {bundle.qty} Pcs</p>
                  <p className="text-gray-400 line-through text-xs">Rp {bundle.original.toLocaleString('id-ID')}</p>
                  <p className="text-orange-600 font-extrabold text-lg sm:text-xl">Rp {bundle.price.toLocaleString('id-ID')}</p>
                  <p className="text-green-600 font-semibold text-xs">HEMAT Rp {bundle.savings.toLocaleString('id-ID')}!</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="#bundling"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-sm sm:text-base rounded-full hover:from-orange-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
              >
                🛒 PESAN BUNDLING SEKARANG!
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BundlePricingBanner;
