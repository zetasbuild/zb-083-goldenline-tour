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
  onOpenInquire?: () => void;
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Tour Packages', href: '/tours' },
    { name: 'Car Rentals', href: '/vehicles' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Fixed Luxury Header in GoldenLine TOUR Dark Luxury Style */}
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
              GoldenLine TOUR
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white text-[15px] font-semibold">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center group relative text-white py-1 transition-colors"
                >
                  <span className={`transition-colors duration-200 ${active ? 'text-white font-bold' : 'text-white/90 hover:text-white'}`}>
                    {link.name}
                  </span>
                  {/* White line with dot for active state */}
                  {active ? (
                    <div className="absolute -bottom-[5px] flex items-center justify-center opacity-100 transition-opacity">
                      <div className="h-[2px] w-8 bg-[#F5F2E6] relative flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5F2E6] absolute" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute -bottom-[5px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="h-[2px] w-6 bg-[#F5F2E6]/60 relative flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#F5F2E6]/60 absolute" />
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Search + Inquire + Hamburger */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2.5 hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center text-white bg-[#F5F2E6]/10">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[14.5px] leading-tight">+94 77 123 4567</span>
                <span className="text-white/70 text-[11px] font-medium leading-tight">24/7 Support</span>
              </div>
            </a>

            {/* Hamburger Button for Full Mega Menu */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              aria-label="Open mega menu"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer pl-2"
            >
              <span className="w-6 h-0.5 bg-[#F5F2E6] rounded-full"></span>
              <span className="w-6 h-0.5 bg-[#F5F2E6] rounded-full"></span>
              <span className="w-6 h-0.5 bg-[#F5F2E6] rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mega Menu Drawer in GoldenLine TOUR style */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#041B2D]/98 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-300 text-white">
          {/* Mega Menu Top Bar */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10 max-w-7xl mx-auto w-full">
            <Link href="/" onClick={() => setMegaMenuOpen(false)} className="flex items-center">
              <span 
                className="font-caveat text-3xl sm:text-4xl text-white whitespace-nowrap"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                GoldenLine TOUR
              </span>
            </Link>

            <button
              onClick={() => setMegaMenuOpen(false)}
              aria-label="Close menu"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white text-lg font-bold hover:bg-[#F5F2E6]/10 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mega Menu Grid Columns */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
            {/* Col 1: Quick Links */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname === '/' ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Home</Link></li>
                <li><Link href="/destinations" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/destinations') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Destinations Guide</Link></li>
                <li><Link href="/tours" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/tours') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Tour Packages</Link></li>
                <li><Link href="/vehicles" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/vehicles') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Car Rentals</Link></li>
                <li><Link href="/services" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/services') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Services</Link></li>
                <li><Link href="/about" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/about') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>About Us</Link></li>
                <li><Link href="/contact" onClick={() => setMegaMenuOpen(false)} className={`transition-colors ${pathname.startsWith('/contact') ? 'text-[#C79636] font-bold' : 'hover:text-[#C79636]'}`}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 2: Sri Lanka Tours */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-4">
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
              <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-4">
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
                <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3 text-xs text-gray-300 mb-6">
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="w-4 h-4 text-[#C79636]" />
                    <a href="tel:+94117311611" className="text-sm font-bold">+94 11 7311 611</a>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4 text-[#C79636]" />
                    <a href="mailto:info@goldenlinetour.lk" className="text-xs">info@goldenlinetour.lk</a>
                  </div>
                  <p className="text-xs text-gray-400">
                    24/7 Airport Travel Counter &amp; Concierge Service
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMegaMenuOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center block cursor-pointer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
