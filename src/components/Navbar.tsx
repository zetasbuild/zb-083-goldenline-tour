'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import { CurrencyType } from '@/types';

interface NavbarProps {
  onOpenPlanTrip: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanTrip }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies: CurrencyType[] = ['LKR', 'USD', 'EUR', 'GBP'];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Tour Packages', href: '/#tours' },
    { name: 'Car Rentals', href: '/#rentals' },
    { name: 'Services', href: '/#features' },
    { name: 'About Us', href: '/#why-us' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const isCurrentActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href === '/destinations' && pathname === '/destinations') return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#e5eee9]'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#0e382b] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-6 h-6 text-[#e5a83b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              <path d="M12 2a5 5 0 0 1 5 5c0 2-2 3-5 3" />
              <path d="M12 12a5 5 0 0 0-5 5c0 2 2 3 5 3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider font-serif text-[#0e382b] leading-tight">
              CEYLON JOURNEYS
            </span>
            <span className="text-xs font-script text-[#e5a83b] tracking-wide font-semibold -mt-0.5">
              Explore Sri Lanka
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const active = isCurrentActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 group ${
                  active ? 'text-[#0e382b] font-bold' : 'text-[#2d473e] hover:text-[#0e382b]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#0e382b] transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Support + Currency + Plan My Trip CTA */}
        <div className="hidden md:flex items-center space-x-5">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#e2ece7] text-xs font-semibold text-[#1e3c31] hover:bg-[#f4f8f6] transition-colors"
            >
              <span>{currency}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg border border-[#e2ece7] py-1 z-50">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#f4f8f6] flex items-center justify-between ${
                      currency === curr ? 'text-[#0e382b] font-bold bg-[#edf5f1]' : 'text-gray-700'
                    }`}
                  >
                    <span>{curr}</span>
                    {currency === curr && <span className="w-1.5 h-1.5 rounded-full bg-[#0e382b]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Support Callout */}
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#e8f6ef] text-[#0f8b53] flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#0e382b] leading-tight group-hover:text-[#165b40]">
                +94 77 123 4567
              </span>
              <span className="text-[10px] text-gray-500 font-medium">24/7 Support</span>
            </div>
          </a>

          {/* Plan My Trip CTA Button */}
          <button
            onClick={onOpenPlanTrip}
            className="bg-[#0e382b] hover:bg-[#165b40] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e5a83b]" />
            <span>Plan My Trip</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => {
              const nextIndex = (currencies.indexOf(currency) + 1) % currencies.length;
              setCurrency(currencies[nextIndex]);
            }}
            className="px-2 py-1 text-xs font-semibold rounded border border-[#e2ece7] text-[#0e382b]"
          >
            {currency}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0e382b] hover:bg-[#edf5f1] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e2ece7] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1 border-b border-gray-100 ${
                  isCurrentActive(link.href)
                    ? 'text-[#0e382b] font-bold'
                    : 'text-[#1e3c31] hover:text-[#0e382b]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 bg-[#f0f8f4] rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-[#0f8b53] text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0e382b]">+94 77 123 4567</div>
                  <div className="text-[10px] text-gray-500">24/7 Dedicated Support</div>
                </div>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanTrip();
                }}
                className="w-full bg-[#0e382b] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#e5a83b]" />
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
