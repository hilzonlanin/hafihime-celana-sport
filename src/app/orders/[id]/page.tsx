'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';

const OrderDetailPage = () => {
  const { id } = useParams();

  // Mock order data - in a real application, this would come from an API
  const order = {
    id: id as string,
    date: '2026-04-10',
    status: 'completed',
    items: [
      {
        id: 'celana-hitam',
        name: 'Celana Sport Jogging Jogger - Hitam',
        price: 49000,
        quantity: 2,
        image: '/images/celana-model-1.png'
      }
    ],
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+62 812 3456 7890',
      address: 'Jl. Contoh Alamat No. 123, Jakarta Selatan, DKI Jakarta 12345'
    }
  };

  const orderTotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Detail Pesanan
              </h1>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">#{order.id}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Tanggal: {new Date(order.date).toLocaleDateString('id-ID')}
                  </p>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Barang dalam pesanan</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="divide-y divide-gray-200">
                      {order.items.map((item) => (
                        <li key={item.id} className="py-4 flex">
                          <div className="w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Prevent infinite loop
                                target.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23e5e7eb"/><path d="M5 8.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm13 0v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2m4 2l2 2 3-3" stroke="%239ca3af" stroke-width="1.5" fill="none"/></svg>')}`;
                              }}
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Jumlah: {item.quantity}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Rincian pembayaran</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>Rp {orderTotal.toLocaleString('id-ID')}</span>
                    </div>
                  </dd>
                </div>

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Informasi pelanggan</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="space-y-1">
                      <p>Nama: {order.customer.name}</p>
                      <p>Email: {order.customer.email}</p>
                      <p>Telepon: {order.customer.phone}</p>
                      <p className="mt-2">Alamat: {order.customer.address}</p>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
              <Link
                href="/orders"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Kembali ke Daftar Pesanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetailPage;