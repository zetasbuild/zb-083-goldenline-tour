'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#f8faf9] border-t border-[#e2ede7] pt-16 pb-8 text-[#18382d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e2ede7]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="#home" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white shadow-md">
                <svg
                  className="w-6 h-6 text-[#FFDF00]"
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
                <span className="text-xl font-bold tracking-wider font-serif text-[#D4AF37] leading-tight">
                  GoldenLine TOUR
                </span>
                <span className="text-xs font-script text-[#FFDF00] tracking-wide font-semibold -mt-0.5">
                  Premium Tours
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#527063] leading-relaxed mb-6 max-w-sm">
              Your trusted luxury travel and vehicle rental partner for unforgettable bespoke journeys across the magical island of Sri Lanka.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#e8f1ed] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[#e8f1ed] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#e8f1ed] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#e8f1ed] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#527063]">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#D4AF37] transition-colors">Tour Packages</a>
              </li>
              <li>
                <a href="#rentals" className="hover:text-[#D4AF37] transition-colors">Car Rentals</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#D4AF37] transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#527063]">
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Tour Packages</span></li>
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Car &amp; Van Rentals</span></li>
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Airport Transfers</span></li>
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Hotel Bookings</span></li>
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Custom Tours</span></li>
              <li><span className="hover:text-[#D4AF37] cursor-pointer">Travel Insurance</span></li>
            </ul>
          </div>

          {/* Col 4: Top Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#527063] mb-6">
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Sigiriya</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Ella</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Kandy</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Mirissa</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Nuwara Eliya</a></li>
              <li><a href="#destinations" className="hover:text-[#D4AF37]">Yala National Park</a></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-[#527063]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+94771234567" className="hover:text-[#D4AF37] font-medium">+94 77 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@goldenlinetour.lk" className="hover:text-[#D4AF37]">info@goldenlinetour.lk</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>www.goldenlinetour.lk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>123, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Designed and Developed by <a href="https://www.zetasbuild.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cba258] transition-colors underline decoration-[#18382d]/20 underline-offset-2">ZetasBuild</a>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
