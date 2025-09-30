import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const croatiaLocations = [
  {
    id: 'plitvice-lakes',
    name: 'Plitvice Lakes National Park',
    image: placeholderImages.find((img) => img.id === 'croatia-plitvice'),
    region: 'Lika-Senj County',
    bestTime: 'May - June, September - October',
    duration: '1-2 days',
    highlights: 'A chain of 16 terraced lakes joined by waterfalls that cascade into a limestone canyon',
    natureElements: 'Lush forests, turquoise lakes, stunning waterfalls, a UNESCO World Heritage site',
    activities: 'Walking wooden plank trails, boat rides, panoramic train rides',
  },
  {
    id: 'dalmatian-coast',
    name: 'Dalmatian Coast & Islands',
    image: placeholderImages.find((img) => img.id === 'croatia-dalmatian'),
    region: 'Dalmatia',
    bestTime: 'June - September',
    duration: '5-7 days',
    highlights: 'Sailing between islands like Hvar, Vis, and Korčula; ancient city of Dubrovnik',
    natureElements: 'Crystal-clear Adriatic Sea, hidden coves, pine-scented islands',
    activities: 'Sailing, swimming, sea kayaking, exploring historic coastal towns',
  },
];

export default function CroatiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Croatia: Mediterranean Jewel
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a land of cascading waterfalls, sun-drenched islands, and ancient cities on the sparkling Adriatic coast.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {croatiaLocations.map((location) => (
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

    