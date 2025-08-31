'use client';

import { useEffect } from 'react';

import { CTASection, HeroSection, MainSection } from '@/components/homepage';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    let previous: History['scrollRestoration'] | undefined;
    let locomotive: { destroy?: () => void } | null = null;

    const rafId = requestAnimationFrame(() => {
      if ('scrollRestoration' in window.history) {
        previous = window.history.scrollRestoration;
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      requestAnimationFrame(async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        locomotive = new LocomotiveScroll();
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (previous !== undefined) {
        window.history.scrollRestoration = previous;
      }
      if (locomotive && typeof locomotive.destroy === 'function') {
        locomotive.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-base px-4">
      <Navbar />
      <HeroSection />
      <MainSection />
      <CTASection />
    </div>
  );
}
