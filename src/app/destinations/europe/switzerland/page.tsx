import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const switzerlandLocations = [
  {
    id: 'matterhorn',
    name: 'Zermatt & The Matterhorn',
    image: placeholderImages.find((img) => img.id === 'switzerland-matterhorn'),
    region: 'Valais',
    bestTime: 'June - September (hiking), December - April (skiing)',
    duration: '3-4 days',
    highlights: 'Iconic Matterhorn peak, Gornergrat railway for panoramic views, charming car-free village of Zermatt',
    natureElements: 'High-alpine scenery, glaciers, pristine mountain lakes',
    activities: 'Hiking, skiing, mountaineering, photography',
  },
  {
    id: 'jungfrau-region',
    name: 'Jungfrau Region',
    image: placeholderImages.find((img) => img.id === 'switzerland-jungfrau'),
    region: 'Bernese Oberland',
    bestTime: 'June - September',
    duration: '4-5 days',
    highlights: 'The "Top of Europe" at Jungfraujoch, Lauterbrunnen Valley with its 72 waterfalls, hikes with views of Eiger, Mönch, and Jungfrau',
    natureElements: 'Classic Swiss alpine scenery, lush valleys, towering peaks',
    activities: 'Hiking, scenic train rides, paragliding, exploring mountain villages',
  },
];

export default function SwitzerlandPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Switzerland: Alpine Paradise
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience the heart of the Alps, where majestic peaks, pristine lakes, and charming villages create a picture-perfect natural playground.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {switzerlandLocations.map((location) => (
            <div
              key={location.id}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full">
                {location.image && (
                  <Image
                    src={location.image.imageUrl}
                    alt={location.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={location.image.imageHint}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{location.name}</h3>
                <p className="mb-1 text-sm font-semibold text-primary">
                  {location.region}
                </p>
                <div className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <p>
                    <strong>Best Season:</strong> {location.bestTime}
                  </p>
                  <p>
                    <strong>Suggested Duration:</strong> {location.duration}
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Highlights:</strong> {location.highlights}
                  </p>
                  <p>
                    <strong>Nature & Activities:</strong> {location.natureElements}. {location.activities}.
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <Link href="/itinerary" passHref>
                    <Button>Plan a Trip to {location.name}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

    