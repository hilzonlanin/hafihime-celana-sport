'use client';

import React from 'react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <Layout showVideo={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
            <div className="sm:px-6 lg:col-span-7 lg:px-0 xl:col-span-8">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Keranjang Belanja</h1>

              {cart.items.length === 0 ? (
                <div className="mt-12 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 sm:w-24 sm:h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <h2 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">Belum ada pesanan</h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-500">Pilih celana sport favoritmu dan tambahkan ke keranjang!</p>
                  <Link href="/" className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 text-sm sm:text-base">
                    Lanjutkan Belanja
                  </Link>
                </div>
              ) : (
                <form className="mt-8">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {cart.items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 border border-gray-200 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23e5e7eb"/><path d="M5 8.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm13 0v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2m4 2l2 2 3-3" stroke="%239ca3af" stroke-width="1.5" fill="none"/></svg>')}`;
                            }}
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="text-sm sm:text-base font-medium text-gray-900">
                              <h3 className="line-clamp-2">{item.name}</h3>
                            </div>
                            <p className="mt-1 text-xs sm:text-sm text-gray-500">Rp {item.price.toLocaleString('id-ID')}/pcs</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  updateQuantity(item.id, Math.max(1, item.quantity - 1));
                                }}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="px-2 sm:px-3 py-1 border-t border-b border-gray-300 text-gray-700 min-w-[60px] sm:min-w-[80px] text-center text-sm">
                                {item.quantity} pcs
                              </span>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  updateQuantity(item.id, item.quantity + 1);
                                }}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-200 transition-colors text-sm"
                              >
                                +
                              </button>

                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="ml-3 sm:ml-4 font-medium text-red-600 hover:text-red-500 text-xs sm:text-sm"
                              >
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </form>
              )}
            </div>

            {cart.items.length > 0 && (
              <div className="mt-8 lg:mt-0 bg-white rounded-lg shadow-md overflow-hidden lg:rounded-xl xl:col-span-4">
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900">Ringkasan Pesanan</h2>

                  <dl className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-base text-gray-900">
                      <dt>Total Barang</dt>
                      <dd>{cart.items.reduce((sum, item) => sum + item.quantity, 0)} pcs</dd>
                    </div>
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm text-gray-600">
                        <dt className="truncate max-w-[200px]">{item.name}</dt>
                        <dd>{item.quantity} pcs x Rp {item.price.toLocaleString('id-ID')}</dd>
                      </div>
                    ))}
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base font-medium text-gray-900">
                      <dt>Total Harga</dt>
                      <dd>Rp {cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString('id-ID')}</dd>
                    </div>
                  </dl>

                  <div className="mt-6">
                    <Link
                      href="/checkout"
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                    >
                      Beli Sekarang
                    </Link>
                  </div>

                  <div className="mt-6 text-center">
                    <Link href="/" className="text-sm font-medium text-pink-600 hover:text-pink-500">
                      Lanjutkan Belanja
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
