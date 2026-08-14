'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, ChevronDown, Check, Car, Hotel, Compass, ArrowRightLeft, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '@/data/travelData';

interface SearchWidgetProps {
  onSearch: (filters: {
    tab: string;
    destination: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
  }) => void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tours' | 'hotels' | 'cars' | 'transfers'>('all');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [destOpen, setDestOpen] = useState(false);
  const [travelerOpen, setTravelerOpen] = useState(false);

  const tabs = [
    { id: 'all', label: 'All', icon: Sparkles },
    { id: 'tours', label: 'Tours', icon: Compass },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'cars', label: 'Cars', icon: Car },
    { id: 'transfers', label: 'Transfers', icon: ArrowRightLeft },
  ] as const;

  const popularDestinations = [
    'Ella - Hill Country',
    'Sigiriya - Cultural Heritage',
    'Mirissa - Beach Paradise',
    'Kandy - Cultural Capital',
    'Nuwara Eliya - Little England',
    'Galle - Dutch Fort & Coast',
    'Bandaranaike Intl Airport (CMB)',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      tab: activeTab,
      destination: destination || 'All Sri Lanka',
      checkIn,
      checkOut,
      adults,
      children,
    });
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(14,56,43,0.12)] border border-[#e2ede7]">
        {/* Service Selection Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 border-b border-gray-100 pb-3 sm:pb-4 mb-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0e382b] text-white shadow-sm'
                    : 'bg-transparent text-gray-600 hover:text-[#0e382b] hover:bg-[#f0f6f3]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#e5a83b]' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Input Controls Grid */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Field 1: Destination */}
            <div className="relative md:col-span-3">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Where to?
              </label>
              <div
                onClick={() => {
                  setDestOpen(!destOpen);
                  setTravelerOpen(false);
                }}
                className="flex items-center gap-2.5 p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] cursor-pointer transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#0e382b] shrink-0" />
                <div className="flex-1 truncate text-xs sm:text-sm font-medium text-gray-800">
                  {destination ? destination : <span className="text-gray-400">Select Destination</span>}
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>

              {/* Destination Dropdown */}
              {destOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 max-h-60 overflow-y-auto">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Popular Destinations
                  </div>
                  {popularDestinations.map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => {
                        setDestination(dest);
                        setDestOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-[#f0f6f3] flex items-center justify-between text-gray-700 hover:text-[#0e382b]"
                    >
                      <span>{dest}</span>
                      {destination === dest && <Check className="w-3.5 h-3.5 text-[#0e382b]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Check In Date */}
            <div className="md:col-span-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Check In
              </label>
              <div className="flex items-center gap-2 p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] transition-colors">
                <Calendar className="w-4 h-4 text-[#0e382b] shrink-0" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-gray-800 outline-none cursor-pointer"
                  placeholder="Select Date"
                />
              </div>
            </div>

            {/* Field 3: Check Out Date */}
            <div className="md:col-span-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Check Out
              </label>
              <div className="flex items-center gap-2 p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] transition-colors">
                <Calendar className="w-4 h-4 text-[#0e382b] shrink-0" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-gray-800 outline-none cursor-pointer"
                  placeholder="Select Date"
                />
              </div>
            </div>

            {/* Field 4: Travelers Selector */}
            <div className="relative md:col-span-3">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Travelers
              </label>
              <div
                onClick={() => {
                  setTravelerOpen(!travelerOpen);
                  setDestOpen(false);
                }}
                className="flex items-center gap-2.5 p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] cursor-pointer transition-colors"
              >
                <Users className="w-4 h-4 text-[#0e382b] shrink-0" />
                <div className="flex-1 truncate text-xs sm:text-sm font-medium text-gray-800">
                  {adults} Adults · {children} Child
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>

              {/* Travelers Dropdown Modal */}
              {travelerOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
                  <div className="space-y-4">
                    {/* Adults counter */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-gray-800">Adults</div>
                        <div className="text-[10px] text-gray-500">Age 13+ years</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children counter */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-xs font-bold text-gray-800">Children</div>
                        <div className="text-[10px] text-gray-500">Age 0-12 years</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setTravelerOpen(false)}
                      className="w-full bg-[#0e382b] text-white py-1.5 rounded-xl text-xs font-semibold hover:bg-[#165b40]"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Field 5: Explore Now CTA Button */}
            <div className="md:col-span-2 pt-1 md:pt-4">
              <button
                type="submit"
                className="w-full bg-[#0e382b] hover:bg-[#165b40] text-white p-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Now</span>
                <Search className="w-4 h-4 text-[#e5a83b] group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
