
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="relative flex h-[80vh] flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900">
        <div className="relative z-10 mx-auto max-w-4xl p-4">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-7xl">
            Unforgettable Journeys,
            <br />
            Responsibly Explored
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Discover the world’s most breathtaking natural wonders with curated
            tours that respect the planet.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
