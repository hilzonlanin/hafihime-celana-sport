'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';

interface HeaderProps {
  showVideo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showVideo = true }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className={`relative w-full bg-white/95 backdrop-blur-sm shadow-md ${showVideo ? 'h-screen' : 'h-16 sm:h-20'}`}>
      {showVideo && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/images/celana-video-2.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="relative container mx-auto px-3 sm:px-4 h-full flex justify-between items-center">
        {/* Logo - Left side */}
        <Link href="/" className="flex items-center">
          <div className="h-8 sm:h-10 w-20 sm:w-28 relative">
            <Image
              src="/logo/hatorena-logo-transparent.png"
              alt="HATORENA"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Cart Link - Right side */}
        <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
