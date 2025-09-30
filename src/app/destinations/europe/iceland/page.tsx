import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const icelandLocations = [
  {
    id: 'jokulsarlon',
    name: 'Jökulsárlón Glacier Lagoon & Diamond Beach',
    image: placeholderImages.find((img) => img.id === 'iceland-glacier-lagoon'),
    region: 'South Coast',
    bestTime: 'Year-round',
    duration: '1-2 days',
    highlights: 'Floating icebergs from a glacier, icebergs washing ashore on a black sand beach',
    natureElements: 'Glacial lagoon, ice caves (in winter), black sand beaches',
    activities: 'Boat tours, ice caving, photography, seal watching',
  },
  {
    id: 'northern-lights',
    name: 'Chasing the Northern Lights',
    image: placeholderImages.find((img) => img.id === 'iceland-northern-lights'),
    region: 'Nationwide (away from city lights)',
    bestTime: 'September - March',
    duration: '3-7 days',
    highlights: 'Witnessing the magical aurora borealis dance across the night sky',
    natureElements: 'Solar winds interacting with Earth`s magnetic field',
    activities: 'Night tours, photography, staying in remote bubble hotels',
  },
];

export default function IcelandPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Iceland: Land of Fire & Ice
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Journey to a land of dramatic contrasts, where glaciers grind past volcanoes, geysers erupt, and the Northern Lights paint the sky.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {icelandLocations.map((location) => (
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

    