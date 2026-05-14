'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const OrderSuccessPage = () => {
  useEffect(() => {
    const visitorId = typeof window !== 'undefined' ? localStorage.getItem('ht_visitor_id') : null;

    fetch('/api/hafihime/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor: { fingerprint: visitorId || undefined },
        events: [{
          name: 'purchase',
          path: '/order-success',
          properties: {
            revenue: 49000,
            currency: 'IDR',
            orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
          },
        }],
      }),
    }).catch(() => {});
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">Terima kasih atas pesanan Anda!</h2>
                <p className="mt-2 text-gray-600">
                  Pesanan Anda telah berhasil diproses. Kami telah mengirimkan konfirmasi ke email Anda.
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">Detail Pesanan</h3>
                  <div className="mt-4 bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nomor Pesanan:</span>
                      <span className="font-medium">#ORD-{Math.floor(Math.random() * 1000000)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">Tanggal:</span>
                      <span className="font-medium">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">Total Pembayaran:</span>
                      <span className="font-medium">Rp {(Math.random() * 1000000 + 500000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/"
                    className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                  >
                    Lanjutkan Belanja
                  </Link>
                  <Link
                    href="/orders"
                    className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Lihat Pesanan Saya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccessPage;