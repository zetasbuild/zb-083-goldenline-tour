'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
  MapPin,
  Compass,
  ArrowRight,
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
  const [toursAccordionOpen, setToursAccordionOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (megaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [megaMenuOpen]);

  const tourCategories = [
    { name: 'Classic Tours Sri Lanka', href: '/tours/tropical-highlights-tour' },
    { name: 'Cultural Heritage Tours', href: '/tours' },
    { name: 'Hill Country Scenic Tours', href: '/tours' },
    { name: 'Wildlife & Safari Tours', href: '/tours' },
    { name: 'Tropical Beach Holidays', href: '/tours' },
    { name: 'Honeymoon & Romantic Tours', href: '/tours' },
    { name: 'Ultra-Luxury Bespoke Tours', href: '/tours' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Tour Packages', href: '/tours' },
    { name: 'Sedan Transfers', href: '/vehicles' },
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
            ? 'bg-black/50 backdrop-blur-md shadow-md border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5'
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
                  {/* Gold line with dot for active state */}
                  {active ? (
                    <div className="absolute -bottom-[5px] flex items-center justify-center opacity-100 transition-opacity">
                      <div className="h-[2px] w-8 bg-[#C79636] relative flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C79636] absolute" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute -bottom-[5px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="h-[2px] w-6 bg-[#C79636]/60 relative flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#C79636]/60 absolute" />
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Search + Contact + Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Desktop WhatsApp Contact */}
            <a
              href="https://wa.me/94715477149"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2.5 hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center text-white bg-[#F5F2E6]/10">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[13.5px] leading-tight">+94 71 547 7149</span>
                <span className="text-white/70 text-[10.5px] font-medium leading-tight">+94 72 321 0119</span>
              </div>
            </a>



            {/* Hamburger Button for Mobile & Mega Menu */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 rounded-full border border-white/30 hover:border-white/80 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="w-5 h-0.5 bg-white transition-all" />
              <div className="w-5 h-0.5 bg-white transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Dark Navigation Overlay (Mega Menu) */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#041B2D]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full mb-8">
            <Link
              href="/"
              onClick={() => setMegaMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#001f35] border-2 border-[#cba258]/60 shadow-md">
                <Image
                  src="/images/logo.PNG"
                  alt="GoldenLine TOUR Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white uppercase leading-none">
                  GoldenLine <span className="text-[#cba258]">TOUR</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-white/70 uppercase mt-0.5">
                  Sri Lanka
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMegaMenuOpen(false)}
              aria-label="Close menu"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Grid Content */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
            
            {/* Primary Nav Links */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C79636] font-bold block mb-4">
                Explore The Island
              </span>
              <ul className="space-y-3 sm:space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMegaMenuOpen(false)}
                      className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all block hover:translate-x-3 duration-200 ${
                        isActive(link.href)
                          ? 'text-[#C79636]'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Categories & Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
              
              {/* Featured Tour Categories */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C79636] font-bold block mb-3">
                  Signature Tour Styles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tourCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setMegaMenuOpen(false)}
                      className="text-xs font-semibold text-gray-300 hover:text-[#C79636] transition-colors py-1 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C79636]" />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Chauffeur Hotline */}
              <div className="pt-4">
                <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-3 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  Direct Contact
                </h3>
                <div className="space-y-3 text-xs text-gray-300 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-[#C79636]/20 flex items-center justify-center text-[#C79636] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-semibold">Call or WhatsApp</span>
                      <a href="tel:+94715477149" className="text-sm font-bold hover:text-[#C79636] transition-colors block">+94 71 547 7149</a>
                      <a href="tel:+94723210119" className="text-xs text-gray-300 hover:text-[#C79636] transition-colors block">+94 72 321 0119</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white pt-2 border-t border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#C79636]/20 flex items-center justify-center text-[#C79636] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-semibold">Email Inquiries</span>
                      <a href="mailto:info@goldenlinetour.lk" className="text-xs font-semibold hover:text-[#C79636] transition-colors">info@goldenlinetour.lk</a>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-1">
                    3/11 Sri Wimalarama Road, Kolonnawa
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94715477149"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMegaMenuOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+94 71 547 7149)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
