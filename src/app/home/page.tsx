
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="relative flex h-[80vh] flex-col items-center justify-center overflow-hidden text-center lg:h-[95vh]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="./hg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-4xl p-4 text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl">
            Unforgettable Journeys,
            <br />
            Responsibly Explored
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover the world’s most breathtaking natural wonders with curated
            tours that respect the planet.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={() => router.push('/destinations')} size="lg">Explore Destinations</Button>
            <Button onClick={() => router.push('/itinerary')} size="lg" variant="secondary">
                Plan Your Trip
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
