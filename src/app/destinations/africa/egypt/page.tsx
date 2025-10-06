import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const egyptLocations = [
  {
    id: 'giza-pyramids',
    name: 'Pyramids of Giza & The Sphinx',
    image: placeholderImages.find((img) => img.id === 'africa-egypt-pyramids'),
    region: 'Giza Necropolis',
    bestTime: 'October - April',
    duration: '1-2 days',
    highlights: 'The last remaining of the Seven Wonders of the Ancient World, exploring the tombs and the Great Sphinx',
    natureElements: 'Iconic desert plateau overlooking the city of Cairo',
    activities: 'Historical tours, camel riding, photography',
  },
  {
    id: 'red-sea',
    name: 'Red Sea Coral Reefs',
    image: placeholderImages.find((img) => img.id === 'africa-egypt-red-sea'),
    region: 'Sharm El Sheikh, Hurghada',
    bestTime: 'Year-round',
    duration: '3-7 days',
    highlights: 'World-class diving and snorkeling spots like Ras Muhammad National Park, vibrant coral gardens, and historic shipwrecks',
    natureElements: 'Pristine marine ecosystems with thousands of species of fish and coral',
    activities: 'Diving, snorkeling, boat trips, beach relaxation',
  },
];

export default function EgyptPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Egypt: Ancient Wonders & Red Sea Reefs
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Journey through millennia of history, from the awe-inspiring pyramids to the vibrant underwater world of the Red Sea.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {egyptLocations.map((location) => (
            <div
              key={location.id}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-80 w-full">
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
