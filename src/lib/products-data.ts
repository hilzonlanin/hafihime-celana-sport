export interface Feature {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  features: Feature[];
  price: number;
  image: string;
  images?: string[];
  reviewsNumber: number;
  reviewStars: number;
  reviewScore: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 'celana-abu-muda',
    name: 'Celana Sport Jogging Jogger - Abu Muda',
    shortDescription: 'Celana jogger sport premium warna abu muda. Bahan nyaman, elastis, cocok olahraga & santai.',
    longDescription: `CELANA SPORT JOGGING JOGGER - ABU MUDA

Bahan premium adem & elastis. Model jogger kekinian.

✅ Bahan premium - adem tidak gerah
✅ Karet pinggang elastis - nyaman dipakai
✅ Model jogger trendi - cocok berbagai aktivitas
✅ Jahitan rapi & kuat
✅ Tersedia 4 warna

💰 Rp 49.000/pcs`,
    features: [
      { id: 'bahan_premium', name: 'Bahan Premium - Adem & Tidak Gerah' },
      { id: 'elastis', name: 'Karet Pinggang Elastis' },
      { id: 'model_jogger', name: 'Model Jogger Kekinian' },
      { id: 'jahitan_kuat', name: 'Jahitan Rapi & Kuat' },
    ],
    price: 49000,
    image: '/images/abu muda.webp',
    images: ['/images/abu muda.webp'],
    reviewsNumber: 892,
    reviewStars: 5,
    reviewScore: 4.8,
    category: 'Celana Sport Jogging'
  },
  {
    id: 'celana-abu-tua',
    name: 'Celana Sport Jogging Jogger - Abu Tua',
    shortDescription: 'Celana jogger sport premium warna abu tua. Bahan nyaman, elastis, cocok olahraga & santai.',
    longDescription: `CELANA SPORT JOGGING JOGGER - ABU TUA

Bahan premium adem & elastis. Model jogger kekinian.

✅ Bahan premium - adem tidak gerah
✅ Karet pinggang elastis - nyaman dipakai
✅ Model jogger trendi - cocok berbagai aktivitas
✅ Jahitan rapi & kuat
✅ Tersedia 4 warna

💰 Rp 49.000/pcs`,
    features: [
      { id: 'bahan_premium', name: 'Bahan Premium - Adem & Tidak Gerah' },
      { id: 'elastis', name: 'Karet Pinggang Elastis' },
      { id: 'model_jogger', name: 'Model Jogger Kekinian' },
      { id: 'jahitan_kuat', name: 'Jahitan Rapi & Kuat' },
    ],
    price: 49000,
    image: '/images/abu tua.webp',
    images: ['/images/abu tua.webp'],
    reviewsNumber: 756,
    reviewStars: 5,
    reviewScore: 4.8,
    category: 'Celana Sport Jogging'
  },
  {
    id: 'celana-navy',
    name: 'Celana Sport Jogging Jogger - Navy',
    shortDescription: 'Celana jogger sport premium warna navy. Bahan nyaman, elastis, cocok olahraga & santai.',
    longDescription: `CELANA SPORT JOGGING JOGGER - NAVY

Bahan premium adem & elastis. Model jogger kekinian.

✅ Bahan premium - adem tidak gerah
✅ Karet pinggang elastis - nyaman dipakai
✅ Model jogger trendi - cocok berbagai aktivitas
✅ Jahitan rapi & kuat
✅ Tersedia 4 warna

💰 Rp 49.000/pcs`,
    features: [
      { id: 'bahan_premium', name: 'Bahan Premium - Adem & Tidak Gerah' },
      { id: 'elastis', name: 'Karet Pinggang Elastis' },
      { id: 'model_jogger', name: 'Model Jogger Kekinian' },
      { id: 'jahitan_kuat', name: 'Jahitan Rapi & Kuat' },
    ],
    price: 49000,
    image: '/images/navy.webp',
    images: ['/images/navy.webp'],
    reviewsNumber: 634,
    reviewStars: 5,
    reviewScore: 4.9,
    category: 'Celana Sport Jogging'
  },
  {
    id: 'celana-hitam',
    name: 'Celana Sport Jogging Jogger - Hitam',
    shortDescription: 'Celana jogger sport premium warna hitam. Bahan nyaman, elastis, cocok olahraga & santai.',
    longDescription: `CELANA SPORT JOGGING JOGGER - HITAM

Bahan premium adem & elastis. Model jogger kekinian.

✅ Bahan premium - adem tidak gerah
✅ Karet pinggang elastis - nyaman dipakai
✅ Model jogger trendi - cocok berbagai aktivitas
✅ Jahitan rapi & kuat
✅ Tersedia 4 warna

💰 Rp 49.000/pcs`,
    features: [
      { id: 'bahan_premium', name: 'Bahan Premium - Adem & Tidak Gerah' },
      { id: 'elastis', name: 'Karet Pinggang Elastis' },
      { id: 'model_jogger', name: 'Model Jogger Kekinian' },
      { id: 'jahitan_kuat', name: 'Jahitan Rapi & Kuat' },
    ],
    price: 49000,
    image: '/images/hitam.webp',
    images: ['/images/hitam.webp'],
    reviewsNumber: 1021,
    reviewStars: 5,
    reviewScore: 4.9,
    category: 'Celana Sport Jogging'
  }
];
