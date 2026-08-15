'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersHero } from '@/components/WalkersHero';
import { WalkersIntro } from '@/components/WalkersIntro';
import { WalkersTourCategories } from '@/components/WalkersTourCategories';
import { WalkersDestinations } from '@/components/WalkersDestinations';
import { WalkersTourPackages } from '@/components/WalkersTourPackages';
import { WalkersBespokeTours } from '@/components/WalkersBespokeTours';
import { WalkersVehicleRentals } from '@/components/WalkersVehicleRentals';
import { WalkersReviews } from '@/components/WalkersReviews';
import { WalkersFAQ } from '@/components/WalkersFAQ';
import { WalkersFooter } from '@/components/WalkersFooter';

import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { MessageSquare } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    router.push('/about');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Style Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Banner Section */}
      <WalkersHero onExploreClick={scrollToPackages} />

      {/* Intro & Heritage Section */}
      <WalkersIntro onAboutClick={scrollToAbout} />

      {/* Destinations Section */}
      <WalkersDestinations />

      {/* Tour Packages Section (with watermark) */}
      <WalkersTourPackages />

      {/* Tailor-Made Bespoke Tours Section */}
      <WalkersBespokeTours
        onPlanTrip={() => router.push('/services')}
      />

      {/* Vehicle Rentals Section */}
      <WalkersVehicleRentals
        onSelectVehicle={() => router.push('/vehicles')}
        onViewAllVehicles={() => router.push('/vehicles')}
      />

      {/* Guest Reviews & Real Stories Section */}
      <WalkersReviews />

      {/* Travel Essentials FAQ */}
      <WalkersFAQ
        onViewAllFaq={() => {
          const el = document.getElementById('faq');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Mega Footer */}
      <WalkersFooter />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="floating-whatsapp">
        <a
          href="https://wa.me/94771234567"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all cursor-pointer"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Modals */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => {
          router.push(`/destinations?q=${encodeURIComponent(term)}`);
        }}
      />
    </main>
  );
}
