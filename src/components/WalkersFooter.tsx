'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const WalkersFooter: React.FC = () => {

  return (
    <footer className="bg-[#001726] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10 text-xs text-gray-300">
          {/* Col 1: Brand & Head Office */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 group">
              <span 
                className="font-caveat text-3xl sm:text-4xl text-white whitespace-nowrap group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Ceylon Journeys
              </span>
            </Link>

            <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
              Sri Lanka’s premier luxury Destination Management Company, pioneering curated journeys and carbon-neutral private tours for over 50 years.
            </p>

            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8ed1fc] shrink-0 mt-0.5" />
                <span>123, Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8ed1fc] shrink-0" />
                <a href="tel:+94117311611" className="hover:text-white">+94 11 7311 611</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8ed1fc] shrink-0" />
                <a href="mailto:info@ceylonjourneys.lk" className="hover:text-white">info@ceylonjourneys.lk</a>
              </div>
            </div>
          </div>

          {/* Col 2: Sri Lanka Tours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8ed1fc] font-bold mb-4">
              Sri Lanka Tours
            </h4>
            <ul className="space-y-2.5">
              <li><a href="/#packages" className="hover:text-white">Classic Tours</a></li>
              <li><a href="/#packages" className="hover:text-white">Cultural Tours</a></li>
              <li><a href="/#packages" className="hover:text-white">Hill Country Scenic</a></li>
              <li><a href="/#packages" className="hover:text-white">Wildlife &amp; Adventure</a></li>
              <li><a href="/#packages" className="hover:text-white">Beach Holidays</a></li>
              <li><a href="/#packages" className="hover:text-white">Honeymoon Tours</a></li>
              <li><a href="/#packages" className="hover:text-white">Luxury Tours</a></li>
            </ul>
          </div>

          {/* Col 3: Signature Brands */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8ed1fc] font-bold mb-4">
              Our Brands
            </h4>
            <ul className="space-y-2.5">
              <li><a href="/#experiences" className="hover:text-white">Artisan Luxury Travel</a></li>
              <li><a href="/#experiences" className="hover:text-white">Ayu Wellness Retreats</a></li>
              <li><a href="/#experiences" className="hover:text-white">Nature Odyssey</a></li>
              <li><a href="/#mice" className="hover:text-white">Corporate MICE &amp; Events</a></li>
              <li><Link href="/destinations" className="hover:text-white">Destinations Guide</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8ed1fc] font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><a href="/#about" className="hover:text-white">About Ceylon Journeys</a></li>
              <li><a href="/#sustainability" className="hover:text-white">Sustainability &amp; CSR</a></li>
              <li><a href="/#faq" className="hover:text-white">Travel FAQs</a></li>
              <li><a href="/#bespoke" className="hover:text-white">Custom Itinerary Builder</a></li>
              <li><a href="/destinations" className="hover:text-white">Attractions &amp; Tips</a></li>
            </ul>
          </div>

          {/* Col 5: Accreditations & Trust */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8ed1fc] font-bold mb-4">
              Accreditations
            </h4>
            <p className="text-[11px] text-gray-400 mb-3">
              Official DMC registered under Sri Lanka Tourism Development Authority (SLTDA), SLAITO, and IATA.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-[11px] text-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#8ed1fc]" />
                <span>SLTDA Certified DMC</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-gray-200">
                <Award className="w-4 h-4 text-[#8ed1fc]" />
                <span>Carbon-Neutral Fleet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Designed and Developed by <a href="https://www.zetasbuild.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-2">ZetasBuild</a>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Booking</a>
            <a href="#" className="hover:text-white">Carbon Footprint Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
