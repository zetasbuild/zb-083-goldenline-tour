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



            {/* Hamburger Button for Mobile & Mega Menu */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 rounded-full border border-white/30 hover:border-white/80 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="w-5 h-0.5 bg-[#F5F2E6] rounded-full"></span>
              <span className="w-5 h-0.5 bg-[#F5F2E6] rounded-full"></span>
              <span className="w-3.5 h-0.5 bg-[#F5F2E6] rounded-full self-start ml-2.5"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu */}
      {megaMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#041B2D]/98 backdrop-blur-xl flex flex-col overflow-y-auto animate-in fade-in duration-300 text-white">
          {/* Top Bar with Brand & Close */}
          <div className="sticky top-0 z-20 bg-[#041B2D]/95 backdrop-blur-md px-5 sm:px-8 py-4 sm:py-6 border-b border-white/10 flex items-center justify-between max-w-7xl mx-auto w-full">
            <Link 
              href="/" 
              onClick={() => setMegaMenuOpen(false)} 
              className="flex items-center group"
            >
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
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Body Content */}
          <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 py-6 sm:py-10">
            {/* Responsive Layout: Single Clean Column on Mobile, 3 Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Col 1: Main Navigation Links */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold mb-3 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  Navigation
                </h3>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMegaMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                          active
                            ? 'bg-white/15 text-[#C79636] font-bold'
                            : 'text-white/90 hover:text-white hover:bg-white/5 font-medium'
                        }`}
                      >
                        <span className="text-base sm:text-lg">{link.name}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${active ? 'text-[#C79636] translate-x-0.5' : 'text-white/40'}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Col 2: Sri Lanka Tours */}
              <div className="border-t border-white/10 md:border-t-0 pt-6 md:pt-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs uppercase tracking-widest text-[#C79636] font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Popular Tour Styles
                  </h3>
                  <button
                    onClick={() => setToursAccordionOpen(!toursAccordionOpen)}
                    className="md:hidden text-xs text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    {toursAccordionOpen ? 'Show less' : 'View all'}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toursAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <ul className={`space-y-2 ${toursAccordionOpen ? 'block' : 'hidden md:block'}`}>
                  {tourCategories.map((t) => (
                    <li key={t.name}>
                      <a
                        href={t.href}
                        onClick={() => setMegaMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors group"
                      >
                        <span>{t.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C79636] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Direct Contact & WhatsApp */}
              <div className="border-t border-white/10 md:border-t-0 pt-6 md:pt-0 flex flex-col justify-between">
                <div>
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
                        <a href="tel:+94771234567" className="text-sm font-bold hover:text-[#C79636] transition-colors">+94 77 123 4567</a>
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
                      24/7 Airport Counter &amp; Chauffeur Concierge Service
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMegaMenuOpen(false)}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
