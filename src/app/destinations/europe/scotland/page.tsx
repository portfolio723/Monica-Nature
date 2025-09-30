import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const scotlandLocations = [
  {
    id: 'isle-of-skye',
    name: 'Isle of Skye',
    image: placeholderImages.find((img) => img.id === 'scotland-skye'),
    region: 'Inner Hebrides',
    bestTime: 'May - September',
    duration: '3-4 days',
    highlights: 'The otherworldly landscapes of the Quiraing and the Old Man of Storr, Fairy Pools',
    natureElements: 'Dramatic sea cliffs, rugged mountains, mystical lochs',
    activities: 'Hiking, photography, wildlife watching (sea eagles, otters)',
  },
  {
    id: 'highlands',
    name: 'Scottish Highlands',
    image: placeholderImages.find((img) => img.id === 'scotland-highlands'),
    region: 'Highlands',
    bestTime: 'May - September',
    duration: '4-6 days',
    highlights: 'The majestic valley of Glencoe, searching for Nessie at Loch Ness, Ben Nevis',
    natureElements: 'Vast, moody landscapes, remote lochs, towering mountains',
    activities: 'Hiking, scenic drives (North Coast 500), castle tours, distillery visits',
  },
];

export default function ScotlandPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Scotland: Highlands & Islands Adventure
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Immerse yourself in the wild, romantic landscapes of Scotland, from the dramatic Isle of Skye to the legendary Highlands.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {scotlandLocations.map((location) => (
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

    