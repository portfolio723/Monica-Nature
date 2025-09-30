import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const botswanaLocations = [
  {
    id: 'okavango-delta',
    name: 'Okavango Delta',
    image: placeholderImages.find((img) => img.id === 'botswana-okavango'),
    region: 'North-West District',
    bestTime: 'May - October (dry season)',
    duration: '3-5 days',
    highlights: 'Mokoro (dugout canoe) safaris, abundant wildlife, luxury lodges',
    natureElements: 'Labyrinth of lagoons, channels, and islands; a UNESCO World Heritage site',
    activities: 'Mokoro trips, walking safaris, game drives, bird watching',
  },
  {
    id: 'chobe-national-park',
    name: 'Chobe National Park',
    image: placeholderImages.find((img) => img.id === 'botswana-chobe'),
    region: 'Chobe District',
    bestTime: 'May - October',
    duration: '2-4 days',
    highlights: 'Largest concentration of elephants in Africa, Chobe River cruises',
    natureElements: 'Lush floodplains, dense woodlands, river ecosystem',
    activities: 'River safaris, game drives, photography',
  },
];

export default function BotswanaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Botswana: Pristine Wilderness & Luxury Safari
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a land of unrivaled natural beauty, from the watery maze of the Okavango Delta to the elephant-rich Chobe National Park.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {botswanaLocations.map((location) => (
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

    