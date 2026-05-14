import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celana Sport Jogging Jogger - Premium Quality Rp 49.000",
  description: "Celana sport jogging jogger premium. Tersedia 4 warna: Abu Muda, Abu Tua, Navy, Hitam. Bahan nyaman, elastis, harga terjangkau Rp 49.000/pcs!",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`https://track.hafihime.com/api/track.js?siteId=${process.env.NEXT_PUBLIC_HAFIHIME_SITE_ID || '60d5f484f1a2c8b0f8e4e7a1'}`}
          strategy="afterInteractive"
        />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
