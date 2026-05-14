'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import Layout from '@/components/Layout';

const CheckoutPage = () => {
  const { cart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi';
    if (!formData.phone.trim()) newErrors.phone = 'Nomor telepon harus diisi';
    if (!formData.address.trim()) newErrors.address = 'Alamat harus diisi';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleKonfirmasi = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const visitorId = typeof window !== 'undefined' ? localStorage.getItem('ht_visitor_id') : null;

    fetch('/api/hafihime/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor: {
          fingerprint: visitorId || undefined,
          phone: formData.phone,
        },
        events: [{
          name: 'checkout',
          path: '/checkout',
          properties: {
            items: cart.items.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
            totalPcs: cart.items.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
            currency: 'IDR',
          },
        }],
      }),
    }).catch(() => {});

    const itemList = cart.items
      .map(item => `• ${item.name} (${item.quantity} pcs)`)
      .join('\n');

    const totalPcs = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    const message = `Hai! Saya ingin memesan:\n\n` +
      `*Detail Pesanan:*\n${itemList}\n\n` +
      `*Total:* ${totalPcs} pcs\n\n` +
      `*Data Pengiriman:*\n` +
      `Nama: ${formData.name}\n` +
      `Telepon: ${formData.phone}\n` +
      `Alamat: ${formData.address}\n\n` +
      `Mohon konfirmasi pesanan. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open('https://wa.me/628977572288?text=' + encoded, '_blank');
  };

  return (
    <Layout showVideo={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pemesanan</h1>

            <div className="mt-8 space-y-8">
              <section>
                <h2 className="text-lg font-medium text-gray-900">Ringkasan Pesanan</h2>
                <div className="mt-4 space-y-2">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm border-b border-gray-100 py-2">
                      <span className="text-gray-900">{item.name}</span>
                      <span className="text-gray-600">{item.quantity} pcs</span>
                    </div>
                  ))}
                </div>
      <div className="mt-4 pt-2 border-t border-gray-200 flex justify-between font-medium">
                  <span>Total</span>
                  <span>{cart.items.reduce((sum, item) => sum + item.quantity, 0)} pcs</span>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-medium text-gray-900">Informasi Pengiriman</h2>

                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Nomor Telepon/Whatsapp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Alamat Pengiriman *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={4}
                      value={formData.address}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                        errors.address ? 'border-red-500' : ''
                      }`}
                      placeholder="Jl. Contoh No. 123, RT/RW, Kelurahan, Kecamatan, Kode Pos"
                    ></textarea>
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                    )}
                  </div>
                </div>
              </section>

              <div className="mt-6">
                <Link href="/cart" className="text-sm font-medium text-pink-600 hover:text-pink-500">
                  ← Edit keranjang
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={handleKonfirmasi}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Konfirmasi Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;