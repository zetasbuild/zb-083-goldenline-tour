'use client';

import React from 'react';
import { Compass, Car, Users, CalendarCheck, Headphones, ShieldCheck } from 'lucide-react';

export const FeaturesBar: React.FC = () => {
  const features = [
    {
      id: 'f-1',
      title: 'Handpicked Destinations',
      icon: Compass,
      desc: 'Exclusive curated locations',
    },
    {
      id: 'f-2',
      title: 'Comfortable Transport',
      icon: Car,
      desc: 'Modern luxury fleet',
    },
    {
      id: 'f-3',
      title: 'Expert Local Guides',
      icon: Users,
      desc: 'Certified local insiders',
    },
    {
      id: 'f-4',
      title: 'Flexible Itineraries',
      icon: CalendarCheck,
      desc: 'Tailored to your pace',
    },
    {
      id: 'f-5',
      title: '24/7 Travel Assistance',
      icon: Headphones,
      desc: 'Always by your side',
    },
    {
      id: 'f-6',
      title: 'Hassle-free Bookings',
      icon: ShieldCheck,
      desc: 'Guaranteed best rates',
    },
  ];

  return (
    <section id="features" className="py-14 sm:py-16 bg-white border-b border-[#e5eee9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#f2f8f5] transition-all duration-300 cursor-default"
              >
                {/* Circular Icon Container with emerald & gold accents */}
                <div className="w-14 h-14 rounded-full bg-[#edf5f1] border border-[#d6e7df] flex items-center justify-center text-[#0e382b] mb-3 group-hover:scale-110 group-hover:bg-[#0e382b] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.8] group-hover:text-[#e5a83b] transition-colors" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-[#143228] mb-0.5 leading-snug group-hover:text-[#0e382b]">
                  {item.title}
                </h2>
                <p className="text-[11px] text-gray-500 hidden sm:block">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
