'use client';

import React, { useState } from 'react';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface OffcanvasSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSearch?: (term: string) => void;
}

export const OffcanvasSearch: React.FC<OffcanvasSearchProps> = ({
  isOpen,
  onClose,
  onSelectSearch,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = [
    'Classic Tours Sri Lanka',
    'Cultural Tours',
    'Hill Country Scenic',
    'Wildlife & Adventure',
    'Beach Holidays',
    'Honeymoon Tours',
    'Tropical Highlights Tour',
    'Luxury Tours',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSelectSearch && query) {
      onSelectSearch(query);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#181513]/95 backdrop-blur-md flex flex-col justify-start pt-16 px-4 sm:px-8 text-white animate-in fade-in duration-200">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Top bar with Close Button */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <span className="text-xs uppercase tracking-widest text-[#cba258] font-bold">Search GoldenLine TOUR</span>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-[#F5F2E6]/10 hover:bg-[#F5F2E6]/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="relative mb-8">
          <input
            type="text"
            placeholder="Search tours, wildlife safaris, Ella trains, beach drops..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-[#F5F2E6]/10 border-2 border-white/30 hover:border-white focus:border-white rounded-full px-6 py-4 text-base sm:text-lg text-white placeholder-gray-400 outline-none transition-all pr-14"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#C85A32] hover:bg-[#b84e27] text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* Popular searches suggestions */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-gray-400 block mb-3 font-semibold">
            Trending Searches
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  if (onSelectSearch) {
                    onSelectSearch(term);
                    onClose();
                  }
                }}
                className="px-4 py-2 rounded-full bg-[#F5F2E6]/10 hover:bg-[#F5F2E6]/25 text-xs text-white transition-all cursor-pointer border border-white/10"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
