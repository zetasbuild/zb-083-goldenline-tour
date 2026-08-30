export type CurrencyType = 'LKR' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyType;
  symbol: string;
  rateFromLKR: number;
  prefix: string;
}

export type DestinationCategory =
  | 'All'
  | 'Beaches'
  | 'Mountains'
  | 'Cultural'
  | 'Wildlife'
  | 'Adventure'
  | 'Heritage'
  | 'Waterfalls'
  | 'Island';

export interface DestinationAttractionItem {
  name: string;
  desc: string;
  image?: string;
}

export interface DestinationThingToDo {
  title: string;
  desc: string;
  tag?: string;
  image?: string;
}

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  region: string;
  category: DestinationCategory;
  rating: number;
  reviewsCount: number;
  popular?: boolean;
  image: string;
  heroImage?: string;
  shortDesc: string;
  description: string;
  tag: string;
  bestTime: string;
  weather?: string;
  idealDuration?: string;
  attractions: string[];
  attractionDetails?: DestinationAttractionItem[];
  thingsToDo?: DestinationThingToDo[];
  travelTips?: string[];
  gallery?: string[];
  nearbyTours?: string[];
}

export interface TourItineraryDay {
  day: string;
  title: string;
  desc: string;
  stay?: string;
  image?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  badge?: string;
  priceLKR: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  destinationsCovered: string[];
  includes: string[];
  category?: string;
  categoryLabel?: string;
  categoryDesc?: string;
  featured?: boolean;
  highlights?: string[];
  itinerary?: TourItineraryDay[];
}

export interface Vehicle {
  id: string;
  category: string;
  model: string;
  passengers: number;
  luggage: number;
  transmission: 'Auto' | 'Manual';
  ac: boolean;
  pricePerDayLKR: number;
  image: string;
  features: string[];
  fuelType: string;
}

export interface Testimonial {
  id: string;
  author: string;
  country: string;
  avatar: string;
  rating: number;
  text: string;
  tourTaken: string;
  date: string;
}

export interface SearchFilterState {
  tab: 'all' | 'tours' | 'hotels' | 'cars' | 'transfers';
  destination: string;
  checkIn: string;
  checkOut: string;
  travelers: {
    adults: number;
    children: number;
    rooms?: number;
  };
}
