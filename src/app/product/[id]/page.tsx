'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/products-data';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const product = products.find(p => p.id === id);
  const productImages = (product?.images || [product?.image]).filter((img): img is string => typeof img === 'string');

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Produk Tidak Ditemukan</h1>
            <Link href="/" className="mt-4 inline-block px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center relative" style={{height: '500px'}}>
                <Image
                  src={productImages[currentSlide]}
                  alt={`${product.name} - Image ${currentSlide + 1}`}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentSlide((currentSlide - 1 + productImages.length) % productImages.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentSlide((currentSlide + 1) % productImages.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                      →
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-pink-600' : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < product.reviewStars ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviewsNumber} terjual)</span>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-pink-600">Rp {product.price.toLocaleString('id-ID')}</span>
                <span className="text-gray-500 text-sm ml-2">/pcs</span>
              </div>

              <div className="mb-6">
                <details className="group" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">Deskripsi Produk</h3>
                    <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-700 whitespace-pre-line">
                    {product.longDescription}
                  </div>
                </details>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <details className="group" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">Fitur Produk</h3>
                    <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4">
                    <ul className="space-y-2 pl-0">
                      {product.features?.map((feature, index) => (
                        <li key={index} className="flex items-start border-b border-gray-100 pb-2">
                          <span className="text-gray-600 mr-2">•</span>
                          <span className="text-gray-900">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <details className="group" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">Spesifikasi Produk</h3>
                    <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Kategori</span>
                        <span className="text-gray-900">{product.category}</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Rating</span>
                        <span className="text-gray-900">{product.reviewScore}/5.0</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Terjual</span>
                        <span className="text-gray-900">{product.reviewsNumber}</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Harga</span>
                        <span className="text-gray-900 font-bold">Rp {product.price.toLocaleString('id-ID')}/pcs</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`block px-6 py-3 rounded-lg transition-colors w-full text-center font-semibold ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {addedToCart ? '✓ Ditambahkan ke Keranjang!' : '🛒 Tambah ke Keranjang'}
                </button>
                <Link
                  href="/cart"
                  className="block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors w-full text-center font-semibold"
                >
                  🛒 Beli Sekarang
                </Link>
                <a
                  href="https://wa.me/628977572288?text=Halo, saya mau tanya tentang Celana Sport Jogging Jogger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors w-full text-center font-semibold"
                >
                  💬 Tanya Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
