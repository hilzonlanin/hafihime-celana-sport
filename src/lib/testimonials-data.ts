export interface Testimonial {
  id: string;
  capacity: string;
  color: string;
  text: string;
  customerName: string;
  rating: number;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    capacity: 'Warna: Hijau Tua, Mustard, Putih',
    color: 'Hijau Tua',
    text: 'Bagus banget, lembut enak dipakai sudah di coba. Ga nyesel beli disini. Seller ramah dan cepat sekali pengemasannya. Makasih ka. Sukses terus dan laris!',
    customerName: 'Reztyani Ghina',
    rating: 5,
    date: '17 Juni 2022',
    avatar: '/images/testimonies/1ead9e8466b8d06774d43810eed9fe2c.jpg'
  },
  {
    id: '2',
    capacity: 'Warna: Putih, Dusty Pink',
    color: 'Putih',
    text: 'Sdh beli yg ke-4 bh, karna bahan bagus dan cocok di kepala. Harga terjangkau, kualitas oke!',
    customerName: 'Wulandari',
    rating: 5,
    date: '13 April 2023',
    avatar: '/images/testimonies/AnoyeCkAyN8ewwUhMAIEAEc.jpg'
  },
  {
    id: '3',
    capacity: 'Warna: Hitam',
    color: 'Hitam',
    text: 'Packing rapi, bahan nya enak ngga licin. Semoga nyaman dipake lama ngga bikin pusing.',
    customerName: 'Vina Fitriani',
    rating: 5,
    date: '8 April 2022',
    avatar: '/images/testimonies/fb15c1e0850fedeb3cda08a08fb63b85 (1).jpg'
  },
  {
    id: '4',
    capacity: 'Warna: Krem/Kulit',
    color: 'Beige',
    text: 'Tebal lembut, gak sakit, mudah digunakan. Bahannya lembut bgt, perdana beli disini gak nyesel gak kecewa deh. Lebih murah juga, packingan rapi, cepat juga nyampenya. Trimakasih ya!',
    customerName: 'Dewi Anggraini',
    rating: 5,
    date: '13 Mei 2022',
    avatar: '/images/testimonies/id-11134103-22060-s33vadjilxdv20 (1).jpg'
  },
  {
    id: '5',
    capacity: 'Warna: Hitam',
    color: 'Black',
    text: 'Bagusss bgtt ciput nyaa, murah jugaa. Lembut & jahitannya rapih!! Pengirimannya cepettt bgt jugaa ih kerenn. Recommended belanja disinii, thanks!',
    customerName: 'Maya Nuraini',
    rating: 5,
    date: '19 Maret 2021',
    avatar: '/images/testimonies/id-11134103-7qul2-lf6z5d0ucqwta8.jpg'
  },
  {
    id: '6',
    capacity: 'Warna: Silver, Hitam, Krem/Kulit',
    color: 'Silver',
    text: 'Bahannya adem bgt gak boong, enakkkk nyaman gak bikin pusing. Makasih ya seller!',
    customerName: 'Anisa Rahmawati',
    rating: 5,
    date: '4 April 2023',
    avatar: '/images/testimonies/id-11134103-7qul4-lfjz8g85c9qqf3.jpg'
  }
];