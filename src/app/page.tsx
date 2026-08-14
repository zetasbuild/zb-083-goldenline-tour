'use client';

import React, { useState } from 'react';
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
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { TourDetailModal } from '@/components/Modals/TourDetailModal';
import { PlanTripModal } from '@/components/Modals/PlanTripModal';

import { TourPackage } from '@/types';
import { MessageSquare } from 'lucide-react';

export default function HomePage() {
  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [inquireInterest, setInquireInterest] = useState('Tailor-made Bespoke Tour');

  const handleOpenInquireWithInterest = (interest: string) => {
    setInquireInterest(interest);
    setIsInquireOpen(true);
  };

  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Style Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => handleOpenInquireWithInterest('General Tour Inquiry')}
      />

      {/* Hero Banner Section */}
      <WalkersHero onExploreClick={scrollToPackages} />

      {/* Intro & Heritage Section */}
      <WalkersIntro onAboutClick={scrollToAbout} />

      {/* Destinations Section */}
      <WalkersDestinations
        onSelectDestination={(dest) => {
          handleOpenInquireWithInterest(`Destination Inquiry: ${dest.name}`);
        }}
      />

      {/* Tour Packages Section (with watermark) */}
      <WalkersTourPackages
        onSelectPackage={(pkg) => setSelectedTour(pkg)}
      />

      {/* Tailor-Made Bespoke Tours Section */}
      <WalkersBespokeTours
        onPlanTrip={() => setIsPlanTripOpen(true)}
      />

      {/* Vehicle Rentals Section */}
      <WalkersVehicleRentals
        onSelectVehicle={(vehicle) => handleOpenInquireWithInterest(`Rental Inquiry: ${vehicle.model}`)}
        onViewAllVehicles={() => handleOpenInquireWithInterest('General Vehicle Rental')}
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

      {/* Modals & Drawers */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => {
          scrollToPackages();
        }}
      />

      <InquireDrawer
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
        prefilledInterest={inquireInterest}
      />

      <TourDetailModal
        pkg={selectedTour}
        isOpen={Boolean(selectedTour)}
        onClose={() => setSelectedTour(null)}
      />

      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
      />
    </main>
  );
}
