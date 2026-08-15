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
  title: 'Ceylon Journeys | Explore Sri Lanka - Premium Tours & Vehicle Rentals',
  description:
    'Uncover the magic of Sri Lanka with Ceylon Journeys. Premium handcrafted tour packages, comfortable vehicle rentals, luxury chauffeur service, and authentic local experiences.',
  keywords: [
    'Sri Lanka Tourism',
    'Ceylon Journeys',
    'Sri Lanka Car Rental',
    'Sri Lanka Tour Packages',
    'Ella Sri Lanka',
    'Sigiriya',
    'Luxury Van Rental Sri Lanka',
  ],
  authors: [{ name: 'Ceylon Journeys' }],
  openGraph: {
    title: 'Ceylon Journeys | Uncover the Magic of Sri Lanka',
    description: 'Premium tours, unforgettable experiences and reliable vehicle rental services in Sri Lanka.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ceylon Journeys',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#13261f] bg-[#fbfdfc] selection:bg-[#0e382b] selection:text-white">
        <CurrencyProvider>
          <ScrollRevealProvider>
            {children}
          </ScrollRevealProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
