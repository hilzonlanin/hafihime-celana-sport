'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const OrdersPage = () => {
  // Mock order data - in a real application, this would come from an API
  const mockOrders = [
    {
      id: '#ORD-001',
      date: '2026-04-10',
      status: 'completed',
      total: 200000,
      items: 1
    }
  ];

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
                Riwayat Pesanan
              </h1>
            </div>
          </div>

          <div className="mt-8">
            {mockOrders.length > 0 ? (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {mockOrders.map((order) => (
                    <li key={order.id}>
                      <Link href={`/orders/${order.id}`} className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-pink-600 truncate">
                              {order.id}
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-sm text-gray-500">
                              <time dateTime={order.date}>{new Date(order.date).toLocaleDateString('id-ID')}</time>
                            </div>
                            <div className="text-sm text-gray-900 font-medium">
                              {order.items} barang • Rp {order.total.toLocaleString('id-ID')}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bg-white shadow sm:rounded-md">
                <div className="px-4 py-12 text-center sm:px-6">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Belum ada pesanan</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Belum ada riwayat pesanan yang tersedia.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      Mulai Belanja
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

export default OrdersPage;