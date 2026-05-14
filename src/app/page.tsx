'use client';

import Layout from '@/components/Layout';
import { products } from '@/lib/products-data';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { useState, useEffect, useRef, useCallback } from 'react';

const celanaImages = [
  '/images/abu muda.webp',
  '/images/abu tua.webp',
  '/images/hitam.webp',
  '/images/navy.webp',
  '/images/id-11134207-7r98x-lqmzaq7say4w6c@resize_w900_nl.webp',
  '/images/id-11134207-7r98x-lqmzaq7shyz4f7.webp',
  '/images/id-11134207-7r990-lqmzaq7sdr9s6b.webp',
  '/images/id-11134207-7r990-lqmzaq7sf5u8b7.webp',
  '/images/id-11134207-7r991-lqmzaq7sjdjk2d.webp',
];

const celanaVideos = [
  '/images/WhatsApp%20Video%202026-05-03%20at%208.48.14%20AM.mp4',
  '/images/WhatsApp%20Video%202026-05-04.mp4',
];

type MediaItem = { type: 'image'; src: string } | { type: 'video'; src: string };

const allMedia: MediaItem[] = [
  ...celanaImages.map(src => ({ type: 'image' as const, src })),
  ...celanaVideos.map(src => ({ type: 'video' as const, src })),
];

function FullFrameImage({ src }: { src: string }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      <Image
        src={src}
        alt="Celana Sport Jogging Jogger"
        fill
        className="object-contain p-4"
      />
    </section>
  );
}

function FullFrameVideo({ src }: { src: string }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain p-4"
      />
    </section>
  );
}

function ColorCard({ product }: { product: typeof products[0] }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    const visitorId = typeof window !== 'undefined' ? localStorage.getItem('ht_visitor_id') : null;
    fetch('/api/hafihime/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor: { fingerprint: visitorId || undefined },
        events: [{
          name: 'add_to_cart',
          path: '/',
          properties: {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            currency: 'IDR',
          },
        }],
      }),
    }).catch(() => {});
  };

  const colorSwatches: Record<string, string> = {
    'celana-abu-muda': '#d4d4d4',
    'celana-abu-tua': '#6b7280',
    'celana-navy': '#1e3a5f',
    'celana-hitam': '#171717',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
        <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-5 h-5 rounded-full border border-gray-300 inline-block" style={{ backgroundColor: colorSwatches[product.id] }} />
          <h3 className="font-bold text-gray-900 text-base">{product.name.replace('Celana Sport Jogging Jogger - ', '')}</h3>
        </div>
        <p className="text-2xl font-bold text-pink-600 mb-3">Rp 49.000</p>
        <button
          onClick={handleAdd}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
            added ? 'bg-green-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {added ? '✓ Ditambahkan!' : '+ Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const colorProducts = [
    products.find(p => p.id === 'celana-abu-muda')!,
    products.find(p => p.id === 'celana-abu-tua')!,
    products.find(p => p.id === 'celana-navy')!,
    products.find(p => p.id === 'celana-hitam')!,
  ];

  const goTo = useCallback((i: number) => {
    setSlide(((i % allMedia.length) + allMedia.length) % allMedia.length);
  }, []);

  const next = useCallback(() => {
    setSlide(s => (s + 1) % allMedia.length);
  }, []);

  const prev = useCallback(() => {
    setSlide(s => (s - 1 + allMedia.length) % allMedia.length);
  }, []);

  useEffect(() => {
    const current = allMedia[slide];
    if (current.type === 'video') {
      const vid = videoRefs.current[slide];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    }
  }, [slide]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlide(s => (s + 1) % allMedia.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    prev();
    intervalRef.current = setInterval(() => {
      setSlide(s => (s + 1) % allMedia.length);
    }, 4000);
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    next();
    intervalRef.current = setInterval(() => {
      setSlide(s => (s + 1) % allMedia.length);
    }, 4000);
  };

  const handleDot = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(i);
    intervalRef.current = setInterval(() => {
      setSlide(s => (s + 1) % allMedia.length);
    }, 4000);
  };

  return (
    <Layout showVideo={false}>
      <main className="bg-white -mt-16 sm:-mt-20">
        {/* CAROUSEL HEADER */}
        <section data-track-section="hero" className="relative w-full h-screen overflow-hidden bg-gray-100">
          {allMedia.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`Celana Sport Jogging Jogger ${i + 1}`}
                  fill
                  className="object-contain p-4"
                  priority={i === 0}
                />
              ) : (
                <video
                  ref={el => { videoRefs.current[i] = el; }}
                  src={item.src}
                  autoPlay
                  muted
                  playsInline
                  loop={false}
                  className="w-full h-full object-contain p-4"
                  onEnded={handleNext}
                />
              )}
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8 pb-20 text-center z-30">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              Celana Sport Jogging Jogger
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6">Rp 49.000/pcs - Tersedia 4 Warna</p>
            <button
              onClick={() => document.getElementById('pilih-warna')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-10 py-4 bg-pink-600 text-white rounded-full text-lg font-bold hover:bg-pink-700 transition-all shadow-xl cursor-pointer pointer-events-auto"
            >
              🛒 Beli Sekarang
            </button>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all cursor-pointer"
          >
            →
          </button>

          <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {allMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === slide ? 'bg-pink-500 w-6' : 'bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </section>

        {/* VIDEOS - one after another */}
        {celanaVideos.map((v, i) => (
          <FullFrameVideo key={i} src={v} />
        ))}

        {/* IMAGES - one after another */}
        {celanaImages.map((img, i) => (
          <FullFrameImage key={i} src={img} />
        ))}

        {/* COLOR VARIANTS */}
        <section data-track-section="pilih-warna" id="pilih-warna" className="relative w-full min-h-screen bg-white flex items-center">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
              Pilih Warna Favoritmu
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Tersedia 4 varian warna premium
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {colorProducts.map((p) => (
                <ColorCard key={p.id} product={p} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/cart"
                className="inline-block px-10 py-4 bg-pink-600 text-white rounded-full text-lg font-bold hover:bg-pink-700 transition-all shadow-lg"
              >
                🛒 Beli Sekarang
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section data-track-section="cta-bottom" className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
              Siap Tampil Sporty?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Celana Sport Jogging Jogger - Rp 49.000/pcs
            </p>
            <button
              onClick={() => document.getElementById('pilih-warna')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-12 py-4 bg-pink-600 text-white rounded-full text-lg font-bold hover:bg-pink-700 transition-all shadow-xl cursor-pointer"
            >
              🛒 Beli Sekarang
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
