'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';

interface WalkersFAQProps {
  onViewAllFaq?: () => void;
}

export const WalkersFAQ: React.FC<WalkersFAQProps> = ({ onViewAllFaq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Best time to visit Sri Lanka?',
      a: 'You may visit Sri Lanka at any time of year. Because it is a tropical nation, anticipate sunshine almost all year round. The northeast monsoon occurs from December to March (ideal for the South & West coast and Hill Country), while the southwest monsoon occurs from June to October (ideal for East Coast beaches like Arugam Bay and Trincomalee).',
    },
    {
      q: 'Is it Safe to Travel to Sri Lanka?',
      a: 'Sri Lanka is widely recognized as a peaceful, hospitable, and secure destination offering breathtaking landscapes and welcoming locals. With round-the-clock tourist police and our 24/7 on-ground assistance, your holiday is safe and carefree.',
    },
    {
      q: 'Do I need a visa to enter Sri Lanka?',
      a: 'Yes, most international travelers require an Electronic Travel Authorization (ETA) prior to arrival. Your passport must be valid for at least six months beyond your travel dates. You can apply easily online at www.eta.gov.lk or contact our concierge for assistance.',
    },
    {
      q: 'What should I pack when visiting Sri Lanka?',
      a: 'Light, breathable cotton attire is ideal for the tropics. For hill stations like Nuwara Eliya and Ella, a light jacket or sweater is recommended. When visiting sacred temples and cultural monuments, shoulders and knees must be covered, and footwear is removed at entrances.',
    },
    {
      q: 'What currency is used in Sri Lanka & are credit cards accepted?',
      a: 'The local currency is the Sri Lankan Rupee (LKR). Visa and MasterCard are widely accepted across star hotels, restaurants, and larger retail shops. Having small local currency cash notes is handy for street fruit markets and tuk-tuks.',
    },
    {
      q: 'Why should I use a travel agency to plan my trip to Sri Lanka?',
      a: 'Planning a round tour in Sri Lanka requires reliable transport, vetted hotel partners, and local knowledge of roads and train ticketing. As an established DMC with over 50 years of experience, Ceylon Journeys handles all logistics, private chauffeurs, entry permits, and 24/7 support so you can relax completely.',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title Card with Image Background */}
          <div className="lg:col-span-5">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between p-8 text-white group">
              <Image
                src="/images/sigiriya.jpg"
                alt="Sri Lanka Travel FAQ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/40 to-transparent" />

              <div className="relative z-10 flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#8ed1fc] font-bold">
                  Travel Essentials
                </span>
              </div>

              <div className="relative z-10">
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-6">
                  <span>Everything</span><br />
                  <span className="font-bold">You Need to Know</span>
                </h2>

                <button
                  onClick={onViewAllFaq}
                  className="next-btn next-btn--white group cursor-pointer"
                >
                  <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-[#002b49]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">View All FAQ</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Expandable Accordions */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#e2ede7] overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/70 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#002b49]">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#f0f6fa] text-[#002b49] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#002b49] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#55697a] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
