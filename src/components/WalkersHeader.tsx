'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Landmark,
  Mountain,
  Footprints,
  Palmtree,
  Heart,
  Crown,
  Compass,
} from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import { CurrencyType } from '@/types';

interface WalkersHeaderProps {
  onOpenSearch: () => void;
  onOpenInquire: () => void;
}

export const WalkersHeader: React.FC<WalkersHeaderProps> = ({
  onOpenSearch,
  onOpenInquire,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies: CurrencyType[] = ['LKR', 'USD', 'EUR', 'GBP'];

  const tourCategories = [
    { name: 'Classic Tours Sri Lanka', href: '/tours/tropical-highlights-tour' },
    { name: 'Cultural Tours Sri Lanka', href: '/tours' },
    { name: 'Hill Country Scenic Tours', href: '/tours' },
    { name: 'Wildlife & Adventure Tours', href: '/tours' },
    { name: 'Beach Holidays', href: '/tours' },
    { name: 'Honeymoon Tours', href: '/tours' },
    { name: 'Luxury Tours', href: '/tours' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md shadow-sm border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center group">
            <span 
              className="font-caveat text-3xl sm:text-4xl text-white whitespace-nowrap group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Ceylon Journeys
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white text-[15px] font-semibold">
            <Link
              href="/"
              className="flex flex-col items-center group relative text-white"
            >
              <span>Home</span>
              {/* White line with dot for active state */}
              <div className="absolute -bottom-[5px] flex items-center justify-center opacity-100 transition-opacity">
                <div className="h-[2px] w-8 bg-white relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
                </div>
              </div>
            </Link>

            <Link href="/destinations" className="hover:text-gray-200 transition-colors">
              Destinations
            </Link>

            <Link href="/tours" className="hover:text-gray-200 transition-colors">
              Tour Packages
            </Link>

            <Link href="/vehicles" className="hover:text-gray-200 transition-colors">
              Car Rentals
            </Link>

            <Link href="/services" className="hover:text-gray-200 transition-colors">
              Services
            </Link>

            <Link href="/about" className="hover:text-gray-200 transition-colors">
              About Us
            </Link>

            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right Action Icons: Search + Inquire + Hamburger */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* WhatsApp Contact */}
            <div className="hidden lg:flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center text-white bg-white/10">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[14.5px] leading-tight">+94 77 123 4567</span>
                <span className="text-white/70 text-[11px] font-medium leading-tight">24/7 Support</span>
              </div>
            </div>

            {/* Hamburger Button for Full Mega Menu */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              aria-label="Open mega menu"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer pl-2"
            >
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mega Menu Drawer in Walkers Tours style */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#001726]/98 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-300 text-white">
          {/* Mega Menu Top Bar */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10 max-w-7xl mx-auto w-full">
            <Link href="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center">
              <span 
                className="font-caveat text-3xl sm:text-4xl text-white whitespace-nowrap"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Ceylon Journeys
              </span>
            </Link>

            <button
              onClick={() => setMegaMenuOpen(false)}
              aria-label="Close menu"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white text-lg font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mega Menu Grid Columns */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
            {/* Col 1: Quick Links */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#00b4d8] font-bold mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Home</Link></li>
                <li><Link href="/destinations" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Destinations Guide</Link></li>
                <li><a href="/#packages" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Tour Packages</a></li>
                <li><a href="/#bespoke" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Tailor-made Tours</a></li>
                <li><a href="/#experiences" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Our Brands</a></li>
                <li><a href="/#sustainability" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Sustainability</a></li>
                <li><a href="/#mice" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">MICE &amp; Events</a></li>
                <li><a href="/#faq" onClick={() => setMegaMenuOpen(false)} className="hover:text-[#00b4d8]">Traveler FAQ</a></li>
              </ul>
            </div>

            {/* Col 2: Sri Lanka Tours */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#00b4d8] font-bold mb-4">
                Sri Lanka Tours
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {tourCategories.map((t) => (
                  <li key={t.name}>
                    <a href={t.href} onClick={() => setMegaMenuOpen(false)} className="hover:text-white transition-colors">
                      {t.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Signature Brands */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#00b4d8] font-bold mb-4">
                Exclusive Experiences
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="/#experiences" onClick={() => setMegaMenuOpen(false)} className="hover:text-white block">
                    <strong className="text-white block text-sm">Artisan Luxury Travel</strong>
                    <span className="text-xs text-gray-400">Curating luxury bespoke escapes</span>
                  </a>
                </li>
                <li>
                  <a href="/#experiences" onClick={() => setMegaMenuOpen(false)} className="hover:text-white block">
                    <strong className="text-white block text-sm">Ayu Wellness &amp; Healing</strong>
                    <span className="text-xs text-gray-400">Holistic Ayurvedic retreats</span>
                  </a>
                </li>
                <li>
                  <a href="/#experiences" onClick={() => setMegaMenuOpen(false)} className="hover:text-white block">
                    <strong className="text-white block text-sm">Nature Odyssey</strong>
                    <span className="text-xs text-gray-400">Wildlife &amp; off-grid expeditions</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Inquire */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#00b4d8] font-bold mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3 text-xs text-gray-300 mb-6">
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="w-4 h-4 text-[#00b4d8]" />
                    <a href="tel:+94117311611" className="text-sm font-bold">+94 11 7311 611</a>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4 text-[#00b4d8]" />
                    <a href="mailto:info@ceylonjourneys.lk" className="text-xs">info@ceylonjourneys.lk</a>
                  </div>
                  <p className="text-xs text-gray-400">
                    24/7 Airport Travel Counter &amp; Concierge Service
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setMegaMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#0077b6] hover:bg-[#0096c7] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                Start Your Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
