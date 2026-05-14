'use client';

import React from 'react';

const WhatsAppFloatButton = () => {
  return (
    <a
      href="https://wa.me/628977572288"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center font-semibold text-sm"
      style={{ zIndex: 1000 }}
    >
      Tanya Kami
    </a>
  );
};

export default WhatsAppFloatButton;