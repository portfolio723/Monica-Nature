import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const usaLocations = [
  {
    id: 'yellowstone',
    name: 'Yellowstone National Park',
    image: placeholderImages.find((img) => img.id === 'usa-yellowstone'),
    region: 'Wyoming, Montana, Idaho',
    bestTime: 'April - May, September - October',
    duration: '4-5 days',
    highlights: 'Grand Prismatic Spring, Old Faithful geyser, vast herds of bison and elk',
    natureElements: 'Geothermal wonders, grizzly bears, wolves, dramatic canyons',
    activities: 'Wildlife watching, hiking, photography, exploring geyser basins',
  },
  {
    id: 'yosemite',
    name: 'Yosemite National Park',
    image: placeholderImages.find((img) => img.id === 'usa-yosemite'),
    region: 'California',
    bestTime: 'May - June (for waterfalls), September - October (for fewer crowds)',
    duration: '3-4 days',
    highlights: 'Iconic granite cliffs of El Capitan and Half Dome, giant sequoia groves',
    natureElements: 'Towering waterfalls, deep valleys, ancient trees',
    activities: 'Hiking, rock climbing, photography, scenic drives',
  },
];

export default function USAPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            USA: Land of National Parks & Natural Wonders
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From geysers and canyons to towering forests and granite cliffs, the United States offers a staggering diversity of natural landscapes to explore.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {usaLocations.map((location) => (
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
