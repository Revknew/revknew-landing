'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}
