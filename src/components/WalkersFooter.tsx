'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Award, Car, Headphones, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const WalkersFooter: React.FC = () => {
  return (
    <footer className="bg-[#181513] text-white pt-20 pb-10 border-t border-[#CBA258]/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 12-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-16 border-b border-white/10 text-xs text-gray-300">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#001f35] border-2 border-[#cba258]/60 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="GoldenLine TOUR Logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span 
                className="font-caveat text-2xl sm:text-3xl text-[#cba258] whitespace-nowrap group-hover:scale-105 transition-transform duration-300 drop-shadow-sm leading-tight"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                GoldenLine TOUR
              </span>
            </Link>

            <p className="text-[11px] text-gray-400 leading-relaxed max-w-sm">
              Your trusted partner for tailor-made bespoke tours, islandwide private sedan transfers, and unforgettable Sri Lankan journeys.
            </p>

            <div className="space-y-2.5 text-[11px] pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/zTcvDFJTytdRrH4S8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cba258] transition-colors"
                >
                  3/11 Sri Wimalarama Road, Kolonnawa, Sri Lanka
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#cba258] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+94715477149" className="hover:text-[#cba258] font-bold transition-colors">
                    +94 71 547 7149
                  </a>
                  <a href="tel:+94723210119" className="hover:text-[#cba258] text-gray-400 text-[10px] transition-colors">
                    +94 72 321 0119
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#cba258] shrink-0" />
                <a href="mailto:info@goldenlinetour.lk" className="hover:text-[#cba258] transition-colors">
                  info@goldenlinetour.lk
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/94715477149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 rounded-full font-bold transition-all duration-300"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp (+94 71 547 7149)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Tour Packages */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#cba258] font-bold mb-4">
              Tour Packages
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tours/tropical-highlights-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Classic Highlights</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/ancient-legacy-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Cultural Triangle</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/scenic-escapes-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Hill Country &amp; Tea</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/wild-adventures-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Wildlife &amp; Safari</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/wild-surf-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Tropical Beach Holidays</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/romantic-climes-tour" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Honeymoon &amp; Romantic</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/expedition-tropical-luxury" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span className="text-[#cba258]">Ultra-Luxury Tours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sedan Transfers & Taxi Rates */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#cba258] font-bold mb-4">
              Sedan Transfers
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Airport (CMB) Transfers</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Kandy Intercity Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Nuwara Eliya Tea Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Sigiriya Heritage Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Galle &amp; Beach Drops</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles#rates-directory" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span className="text-[#cba258]">All 57 Fixed Rates</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/94715477149?text=Hello%20GoldenLine%20TOUR!%20I%20want%20to%20inquire%20about%20a%20private%20transfer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cba258] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Instant WhatsApp Ride</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#cba258] font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Destinations Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Sedan Transfers</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#cba258] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#cba258]/60" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Accreditations & Trust */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#cba258] font-bold mb-4">
              Trust &amp; Safety
            </h4>
            <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">
              Official Sri Lanka Tourism registered operator with certified English-speaking tourist chauffeurs and passenger insurance.
            </p>
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-[11px] text-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#cba258] shrink-0" />
                <span>SLTDA Certified Drivers</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-gray-200">
                <Car className="w-4 h-4 text-[#cba258] shrink-0" />
                <span>Modern A/C Sedan Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-gray-200">
                <Award className="w-4 h-4 text-[#cba258] shrink-0" />
                <span>Fixed Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-gray-200">
                <Headphones className="w-4 h-4 text-[#cba258] shrink-0" />
                <span>24/7 Islandwide Helpline</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Designed and Developed by{' '}
            <a
              href="https://www.zetasbuild.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cba258] hover:text-white font-semibold transition-colors underline decoration-[#cba258]/30 underline-offset-2"
            >
              ZetasBuild
            </a>
            . All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-[#cba258] transition-colors">About</Link>
            <Link href="/vehicles" className="hover:text-[#cba258] transition-colors">Transfers</Link>
            <Link href="/tours" className="hover:text-[#cba258] transition-colors">Tours</Link>
            <Link href="/contact" className="hover:text-[#cba258] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
