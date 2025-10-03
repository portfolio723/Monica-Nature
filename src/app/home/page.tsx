
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="relative flex h-[80vh] flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.png"
            alt="Tropical beach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl p-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">
            Unforgettable Journeys,
            <br />
            Responsibly Explored
          </h1>
          <p className="mt-4 text-lg text-gray-200 sm:text-xl">
            Discover the world’s most breathtaking natural wonders with curated
            tours that respect the planet.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/destinations" passHref>
              <Button size="lg">Explore Destinations</Button>
            </Link>
            <Link href="/itinerary" passHref>
              <Button size="lg" variant="secondary">
                Plan Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
