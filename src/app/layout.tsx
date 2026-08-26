import type { Metadata } from 'next';
import { Outfit, Playfair_Display, Caveat } from 'next/font/google';
import './globals.css';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { ScrollRevealProvider } from '@/components/ScrollRevealProvider';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GoldenLine TOUR | Premium Tours & Vehicle Rentals',
  description:
    'Uncover the magic of Sri Lanka with GoldenLine TOUR. Premium handcrafted tour packages, comfortable vehicle rentals, luxury chauffeur service, and authentic local experiences.',
  keywords: [
    'Sri Lanka Tourism',
    'GoldenLine TOUR',
    'Sri Lanka Car Rental',
    'Sri Lanka Tour Packages',
    'Ella Sri Lanka',
    'Sigiriya',
    'Luxury Van Rental Sri Lanka',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.webp', type: 'image/webp' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/images/logo.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  openGraph: {
    title: 'GoldenLine TOUR | Uncover the Magic of Sri Lanka',
    description: 'Premium tours, unforgettable experiences and reliable vehicle rental services in Sri Lanka.',
    type: 'website',
    locale: 'en_US',
    siteName: 'GoldenLine TOUR',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 800,
        alt: 'GoldenLine TOUR',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#13261f] bg-[#fbfdfc] selection:bg-[#D4AF37] selection:text-white">
        <CurrencyProvider>
          <ScrollRevealProvider>
            {children}
          </ScrollRevealProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
