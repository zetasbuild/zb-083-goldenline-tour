'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CurrencyType } from '@/types';

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (c: CurrencyType) => void;
  formatPrice: (priceLKR: number) => string;
  getRawPrice: (priceLKR: number) => { amount: number; symbol: string; code: CurrencyType };
}

const RATES: Record<CurrencyType, { rate: number; symbol: string; prefix: string }> = {
  LKR: { rate: 1, symbol: 'LKR', prefix: 'LKR ' },
  USD: { rate: 0.0033, symbol: '$', prefix: '$' },
  EUR: { rate: 0.0031, symbol: '€', prefix: '€' },
  GBP: { rate: 0.0026, symbol: '£', prefix: '£' },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyType>('LKR');

  const formatPrice = (priceLKR: number): string => {
    const config = RATES[currency];
    const converted = priceLKR * config.rate;
    
    if (currency === 'LKR') {
      return `LKR ${priceLKR.toLocaleString()}`;
    }
    
    return `${config.symbol}${Math.round(converted).toLocaleString()}`;
  };

  const getRawPrice = (priceLKR: number) => {
    const config = RATES[currency];
    return {
      amount: Math.round(priceLKR * config.rate),
      symbol: config.symbol,
      code: currency,
    };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, getRawPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
