'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ColorQuantity {
  color: string;
  quantity: number;
}

interface BundleProps {
  quantity: number;
  originalPrice: number;
  bundlePrice: number;
  savings: number;
  discountPercent: number;
  badge: string;
  badgeColor: string;
  isBestSeller?: boolean;
  features: string[];
  productType?: 'ciput' | 'square';
}

const CIPUT_COLORS = [
  { name: 'White', label: '🤍 White' },
  { name: 'Black', label: '🖤 Black' },
  { name: 'Navy Blue', label: '💙 Navy Blue' },
  { name: 'Royal Blue', label: '💙 Royal Blue' },
  { name: 'Maroon', label: '❤️ Maroon' },
  { name: 'Burgundy', label: '💜 Burgundy' },
  { name: 'Dusty Pink', label: '🌸 Dusty Pink' },
  { name: 'Olive Green', label: '💚 Olive Green' },
  { name: 'Dark Gray', label: '🩶 Dark Gray' },
  { name: 'Brown', label: '🤎 Brown' },
  { name: 'Beige', label: '🤍 Beige' },
  { name: 'Caramel', label: '🤎 Caramel' }
];

const SQUARE_COLORS = [
  { name: 'Hitam', label: '🖤 Hitam' },
  { name: 'Navy', label: '💙 Navy' },
  { name: 'Abu Sma', label: '🩶 Abu Sma' },
  { name: 'Dusty Pink', label: '🌸 Dusty Pink' },
  { name: 'Maroon', label: '❤️ Maroon' },
  { name: 'Choco', label: '🤎 Choco' },
  { name: 'Army', label: '💚 Army' },
  { name: 'Silver', label: '🩶 Silver' },
  { name: 'Nude', label: '🤍 Nude' },
  { name: 'Mocca', label: '🤎 Mocca' },
  { name: 'Charcoal', label: '🖤 Charcoal' },
  { name: 'Milo', label: '🤎 Milo' }
];

const BundleOrder: React.FC<BundleProps> = ({
  quantity,
  originalPrice,
  bundlePrice,
  savings,
  discountPercent,
  badge,
  badgeColor,
  isBestSeller = false,
  features,
  productType = 'ciput'
}) => {
  const selectedColors = productType === 'square' ? SQUARE_COLORS : CIPUT_COLORS;
  const [colorQuantities, setColorQuantities] = useState<ColorQuantity[]>(
    selectedColors.map(c => ({ color: c.name, quantity: 0 }))
  );
  const [showForm, setShowForm] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const totalSelected = colorQuantities.reduce((sum, cq) => sum + cq.quantity, 0);
  const isComplete = totalSelected === quantity;

  const updateQuantity = (colorName: string, delta: number) => {
    setColorQuantities(prev =>
      prev.map(cq => {
        if (cq.color === colorName) {
          const newQty = Math.max(0, cq.quantity + delta);
          return { ...cq, quantity: newQty };
        }
        return cq;
      })
    );
  };

  const handleOrderClick = () => {
    if (!isComplete) {
      alert(`Pilih tepat ${quantity} produk untuk paket ini!`);
      return;
    }
    setShowForm(true);
  };

  const sendToWhatsApp = () => {
    if (!customerData.name || !customerData.phone || !customerData.address) {
      alert('Mohon lengkapi semua data!');
      return;
    }

    const selectedColors = colorQuantities
      .filter(cq => cq.quantity > 0)
      .map(cq => `• ${cq.color}: ${cq.quantity} pcs`)
      .join('\n');

    const message = `Hai! Saya ingin memesan PROMO BUNDLING:\n\n` +
      `*Paket ${quantity} Pcs*\n` +
      `*Harga:* Rp ${bundlePrice.toLocaleString('id-ID')}\n` +
      `*Hemat:* Rp ${savings.toLocaleString('id-ID')}\n\n` +
      `*Pilihan Warna:*\n${selectedColors}\n\n` +
      `*Data Pembeli:*\n` +
      `Nama: ${customerData.name}\n` +
      `Telepon: ${customerData.phone}\n` +
      `Alamat: ${customerData.address}\n\n` +
      `Mohon info ketersediaan dan cara pembayaran. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open('https://wa.me/628977572288?text=' + encoded, '_blank');
  };

  const badgeClasses: Record<string, string> = {
    orange: 'bg-orange-100 text-orange-700 border-orange-400',
    pink: 'bg-pink-100 text-pink-700 border-pink-500',
    green: 'bg-green-100 text-green-700 border-green-500'
  };

  const buttonFrom = {
    orange: 'from-orange-500 to-pink-600',
    pink: 'from-pink-500 to-orange-600',
    green: 'from-green-500 to-teal-600'
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-5 sm:p-6 border-4 relative ${isBestSeller ? 'border-pink-500' : badgeClasses[badgeColor]?.split(' ')[2] || 'border-gray-300'} hover:shadow-2xl transition-all`}>
      {isBestSeller && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-xs sm:text-sm px-6 py-1.5 rounded-full shadow-lg">
            ⭐ BEST SELLER
          </div>
        </div>
      )}

      <div className="text-center mb-4">
        <div className={`inline-block font-bold text-xs sm:text-sm px-4 py-1 rounded-full mb-3 ${badgeClasses[badgeColor]}`}>
          HEMAT {discountPercent}%
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Paket {quantity} Pcs</h3>
        
        {/* Product Image - Only for Ciput */}
        {productType === 'ciput' && (
          <div className="w-full mb-3 flex justify-center">
            <Image
              src="/ciput.jpeg"
              alt="Ciput Premium Colors"
              width={280}
              height={180}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Product Image - Only for Square */}
        {productType === 'square' && (
          <div className="w-full mb-3 flex justify-center">
            <Image
              src="/hijab.jpeg"
              alt="Hijab Square Colors"
              width={280}
              height={180}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        
        <div className="mb-3">
          <p className="text-gray-400 line-through text-sm">Rp {originalPrice.toLocaleString('id-ID')}</p>
          <p className={`text-3xl sm:text-4xl font-bold ${badgeColor === 'orange' ? 'text-orange-600' : badgeColor === 'pink' ? 'text-pink-600' : 'text-green-600'}`}>
            Rp {bundlePrice.toLocaleString('id-ID')}
          </p>
          <p className="text-green-600 font-semibold text-xs sm:text-sm mt-1">HEMAT Rp {savings.toLocaleString('id-ID')}!</p>
        </div>
      </div>

      <ul className="text-left text-xs sm:text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Color Selection */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-3 text-center">
          Pilih {quantity} Warna (Total: {totalSelected}/{quantity})
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-64 overflow-y-auto">
          {colorQuantities.map((cq) => (
            <div key={cq.color} className="flex items-center justify-between bg-gray-50 rounded-lg p-1 sm:p-1.5">
              <span className="text-[9px] sm:text-[10px] text-gray-700 truncate flex-1 pr-0.5" title={cq.color}>{cq.color}</span>
              <div className="flex items-center space-x-0.5 flex-shrink-0">
                <button
                  onClick={() => updateQuantity(cq.color, -1)}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-gray-200 rounded text-[9px] sm:text-xs font-bold hover:bg-gray-300 disabled:opacity-50"
                  disabled={cq.quantity === 0}
                >
                  -
                </button>
                <span className="w-4 sm:w-5 text-center text-[9px] sm:text-xs font-semibold">{cq.quantity}</span>
                <button
                  onClick={() => updateQuantity(cq.color, 1)}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center bg-orange-500 text-white rounded text-[9px] sm:text-xs font-bold hover:bg-orange-600 disabled:opacity-50"
                  disabled={totalSelected >= quantity}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!showForm ? (
        <button
          onClick={handleOrderClick}
          disabled={!isComplete}
          className={`w-full py-3 rounded-full font-bold text-sm sm:text-base transition-all transform ${
            isComplete
              ? `bg-gradient-to-r ${buttonFrom[badgeColor as keyof typeof buttonFrom]} text-white hover:scale-105 shadow-lg`
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          🛒 {isComplete ? 'PILIH WARNA & PESAN' : `PILIH ${quantity} WARNA`}
        </button>
      ) : (
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-4 border-2 border-orange-200">
          <h4 className="font-bold text-gray-900 mb-3 text-sm text-center">📋 DATA PEMBELI</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={customerData.name}
              onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              placeholder="Nomor WhatsApp (+62...)"
              value={customerData.phone}
              onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Alamat Lengkap"
              value={customerData.address}
              onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={sendToWhatsApp}
              className={`w-full py-3 bg-gradient-to-r ${buttonFrom[badgeColor as keyof typeof buttonFrom]} text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all shadow-lg`}
            >
              📤 KIRIM PESANAN VIA WHATSAPP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BundleOrder;
