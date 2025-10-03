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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/2.png"
                alt="Iguazu Falls"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-2xl font-bold text-white">Iguazu Falls</h3>
              </div>
            </div>

            <div className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/3.png"
                alt="Patagonia"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-2xl font-bold text-white">Patagonia</h3>
              </div>
            </div>

            <div className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1548942719-33bc7c093437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxNYXNhaSUyME1hcmF8ZW58MHx8fHwxNzU5MjEwODMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Masai Mara"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-2xl font-bold text-white">Masai Mara</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
