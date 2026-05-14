'use client';

import { useState, useEffect } from 'react';

const SlideshowHeroSection = () => {
  // Image carousel - using ciput and hijab product images
  const images = [
    '/ciput.jpeg',
    '/hijab.jpeg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hijab Ciput Premium ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Eyebrow Text */}
        <p className="text-orange-400 font-semibold text-sm sm:text-base mb-3 tracking-widest uppercase">
          HIJAB & DALEMAN PREMIUM
        </p>

        {/* Headline Stack - AIDA Attention */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-4xl drop-shadow-lg">
          Hijab Ciput Premium Polos - Bahan Spandek
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 max-w-3xl font-medium drop-shadow">
          Solusi Sempurna untuk Penampilan Hijab yang Rapi dan Syar'i
        </h2>

        {/* Sub-description */}
        <p className="text-sm sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Bahan spandek premium yang lembut, melar, dan nyaman dipakai seharian. Tersedia dalam 10+ warna elegan!
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row w-full sm:w-auto">
          <a
            href="#products"
            className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-full hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
          >
            🛒 BELI SEKARANG
          </a>
          <a
            href="#features"
            className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105"
          >
            📋 LIHAT KEUNGGULAN
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SlideshowHeroSection;
