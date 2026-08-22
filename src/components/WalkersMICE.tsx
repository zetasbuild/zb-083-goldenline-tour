'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Layers, Users, Sparkles } from 'lucide-react';

interface WalkersMICEProps {
  onMiceInquire: () => void;
}

export const WalkersMICE: React.FC<WalkersMICEProps> = ({ onMiceInquire }) => {
  const miceFeatures = [
    {
      title: 'State-of-the-art MICE management platform',
      icon: Layers,
    },
    {
      title: 'Dedicated MICE team headed by an executive project manager',
      icon: Users,
    },
    {
      title: 'Tailor-made corporate incentive & conference solutions',
      icon: Sparkles,
    },
  ];

  return (
    <section id="mice" className="py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Features */}
          <div data-reveal="fade-right" data-reveal-duration="850" className="lg:col-span-6 flex flex-col items-start">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--color-primary)] leading-tight mb-4">
              <span className="font-bold">Expert MICE Solutions for</span><br />
              Unforgettable Events
            </h2>

            <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed mb-6">
              Sri Lanka is a premier MICE destination offering world-class conference facilities in Colombo for up to 2,000 attendees, as well as intimate executive incentive retreats blending business with pristine coastal resorts and cultural wonders.
            </p>

            <div data-reveal-stagger className="space-y-3.5 mb-8 w-full">
              {miceFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#F5F2E6] border border-[#e5eee9] shadow-sm hover-lift">
                    <div className="w-10 h-10 rounded-xl bg-[#e6f3fa] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#0077b6]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)]">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onMiceInquire}
              className="next-btn next-btn--blue group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">MICE Details</span>
            </button>
          </div>

          {/* Right Event Photography */}
          <div data-reveal="fade-left" data-reveal-duration="850" data-reveal-delay="200" className="lg:col-span-6">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl group hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate MICE and Luxury Events Sri Lanka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-sm font-bold">World-Class Conventions &amp; Incentive Gala Retreats</div>
                <div className="text-xs text-gray-200">Colombo · Galle · Kandy · Bentota</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
