'use client';

import { Navbar } from '@/components/Navbar';
import { CTASection, HeroSection, MainSection } from '@/components/homepage';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
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
