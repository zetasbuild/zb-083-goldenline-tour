'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for the top luxury gold indicator bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Comprehensive continuous scroll observer
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const rootMargin = isMobile ? '0px 0px -10px 0px' : '0px 0px -30px 0px';

    const observerCallback: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('is-revealed');

          // Handle staggered cascading for children
          if (el.hasAttribute('data-reveal-stagger') || el.classList.contains('reveal-stagger')) {
            const children = Array.from(el.children) as HTMLElement[];
            children.forEach((child, index) => {
              child.style.setProperty('--reveal-index', `${index + 1}`);
              child.classList.add('is-revealed');
            });
          }

          // Do not unobserve, so we can re-trigger
        } else {
          // Reset animation if element goes below the viewport (so it animates again when scrolling down)
          if (entry.boundingClientRect.top > 0) {
            const el = entry.target as HTMLElement;
            el.classList.remove('is-revealed');
            
            if (el.hasAttribute('data-reveal-stagger') || el.classList.contains('reveal-stagger')) {
              const children = Array.from(el.children) as HTMLElement[];
              children.forEach((child) => {
                child.classList.remove('is-revealed');
              });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.05, 0.1],
      rootMargin,
    });

    const registerElements = () => {
      // Find all designated elements and auto-enhance major page sections
      const targets = document.querySelectorAll<HTMLElement>(
        '[data-reveal], [data-reveal-stagger], section:not(.no-reveal), footer:not(.no-reveal), .reveal-section, .hover-box'
      );

      targets.forEach((target) => {
        // If not already revealed, ensure data-reveal attribute exists
        if (!target.hasAttribute('data-reveal') && !target.hasAttribute('data-reveal-stagger')) {
          target.setAttribute('data-reveal', 'fade-up');
        }

        const rect = target.getBoundingClientRect();
        // If element is already in viewport upon initial load, reveal immediately
        if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
          target.classList.add('is-revealed');
          if (target.hasAttribute('data-reveal-stagger') || target.classList.contains('reveal-stagger')) {
            const children = Array.from(target.children) as HTMLElement[];
            children.forEach((child, index) => {
              child.style.setProperty('--reveal-index', `${index + 1}`);
              child.classList.add('is-revealed');
            });
          }
        } else {
          observer.observe(target);
        }
      });
    };

    registerElements();

    // Re-check when DOM changes dynamically (filtering, client navigation)
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>

      {children}
    </>
  );
};
