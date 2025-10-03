
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const newZealandLocations = [
  {
    id: 'fiordland',
    name: 'Fiordland National Park',
    image: placeholderImages.find((img) => img.id === 'oceania-fiordland'),
    region: 'South Island',
    bestTime: 'October - April',
    duration: '3-4 days',
    highlights: 'The majestic Milford Sound and the dramatic Doubtful Sound, towering waterfalls',
    natureElements: 'Glacier-carved fiords, lush rainforests, and rugged granite peaks',
    activities: 'Overnight cruises, kayaking, hiking (Milford Track), scenic flights',
  },
  {
    id: 'queenstown',
    name: 'Queenstown & The Southern Alps',
    image: placeholderImages.find((img) => img.id === 'oceania-queenstown'),
    region: 'South Island',
    bestTime: 'Year-round (seasonal activities)',
    duration: '3-5 days',
    highlights: 'Adventure capital of the world, stunning mountain scenery around Lake Wakatipu',
    natureElements: 'Dramatic mountain ranges (The Remarkables), pristine alpine lakes',
    activities: 'Hiking, bungee jumping, skiing, wine tasting in nearby Central Otago',
  },
];

export default function NewZealandPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            New Zealand: Middle Earth Adventures
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a land of jaw-dropping scenery, where ancient glaciers have carved fiords and adventure awaits around every corner.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {newZealandLocations.map((location) => (
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
