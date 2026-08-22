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
    <div className="fixed inset-0 z-50 bg-[#001f35]/95 backdrop-blur-md flex flex-col justify-start pt-16 px-4 sm:px-8 text-white animate-in fade-in duration-200">
      {/* Top Close Button */}
      <div className="max-w-5xl mx-auto w-full flex justify-end mb-8">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="w-12 h-12 rounded-full bg-[#F5F2E6]/10 hover:bg-[#F5F2E6]/20 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Search Input Box */}
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-center mb-6 text-gray-200">
          Search Sri Lanka Tours, Destinations &amp; Experiences
        </h2>

        <form onSubmit={handleSubmit} className="relative mb-8">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Keyword (e.g. Wildlife, Ella, Beach, 7 Days...)"
            className="w-full bg-[#F5F2E6]/10 border-2 border-white/30 hover:border-white focus:border-white rounded-full px-6 py-4 text-base sm:text-lg text-white placeholder-gray-400 outline-none transition-all pr-14"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0077b6] hover:bg-[#0096c7] text-white flex items-center justify-center transition-all cursor-pointer"
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
