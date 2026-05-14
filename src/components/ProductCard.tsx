'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products-data';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();

  const productImages = (product.images || [product.image]).filter((img): img is string => typeof img === 'string');

  const getColorLabel = (id: string) => {
    const map: Record<string, string> = {
      'celana-abu-muda': 'Abu Muda',
      'celana-abu-tua': 'Abu Tua',
      'celana-navy': 'Navy',
      'celana-hitam': 'Hitam',
    };
    return map[id] || '';
  };

  const getColorSwatch = (id: string) => {
    const map: Record<string, string> = {
      'celana-abu-muda': '#d4d4d4',
      'celana-abu-tua': '#6b7280',
      'celana-navy': '#1e3a5f',
      'celana-hitam': '#171717',
    };
    return map[id] || '#ccc';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-56 sm:h-64 md:h-72 w-full bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer">
          {!imageError ? (
            <Image
              src={productImages[currentSlide]}
              alt={`${product.name} - Image ${currentSlide + 1}`}
              fill
              className={`object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}

          {productImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide((currentSlide - 1 + productImages.length) % productImages.length);
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg text-sm"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide((currentSlide + 1) % productImages.length);
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg text-sm"
              >
                →
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-pink-600' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Link>

      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        <Link href={`/product/${product.id}`} className="hover:text-pink-600 transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
        </Link>

        <div className="flex items-center mb-2">
          <span className="w-4 h-4 rounded-full border border-gray-300 inline-block mr-2" style={{ backgroundColor: getColorSwatch(product.id) }} />
          <span className="text-sm text-gray-600">{getColorLabel(product.id)}</span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < product.reviewStars ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-xs sm:text-sm text-gray-600">({product.reviewsNumber} terjual)</span>
        </div>

        <div className="mb-4">
          <span className="text-xl sm:text-2xl font-bold text-pink-600">Rp {product.price.toLocaleString('id-ID')}</span>
          <span className="text-gray-500 text-xs ml-1">/pcs</span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">{product.shortDescription}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2">Fitur:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features && product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-green-500">✓</span>
                <span className="flex-1">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto space-y-2">
          <button
            onClick={handleAddToCart}
            className={`w-full px-4 py-3 rounded-lg transition-all font-bold text-sm sm:text-base ${
              addedToCart
                ? 'bg-green-600 text-white'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {addedToCart ? '✓ Ditambahkan!' : '🛒 Tambah ke Keranjang'}
          </button>

          <Link
            href="/cart"
            className="block w-full px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all font-bold text-sm sm:text-base text-center"
          >
            🛒 Beli Sekarang
          </Link>

          <a
            href="https://wa.me/628977572288?text=Halo, saya mau tanya tentang Celana Sport Jogging Jogger"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-bold text-sm sm:text-base text-center"
          >
            💬 Tanya Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
