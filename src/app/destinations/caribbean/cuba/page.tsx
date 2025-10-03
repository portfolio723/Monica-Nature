
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const cubaLocations = [
  {
    id: 'havana',
    name: 'Havana',
    image: placeholderImages.find((img) => img.id === 'caribbean-cuba'),
    region: 'Havana Province',
    bestTime: 'December to May',
    duration: '3-4 days',
    highlights: 'Strolling through Old Havana (a UNESCO World Heritage site), riding in a classic American car, vibrant music and art scenes',
    natureElements: 'The famous Malecón sea drive, nearby beaches of Playas del Este',
    activities: 'Cultural tours, salsa dancing, exploring historic forts, photography',
  },
  {
    id: 'vinales',
    name: 'Viñales Valley',
    image: {
      id: 'cuba-vinales',
      description: 'Viñales Valley in Cuba',
      imageUrl: 'https://images.unsplash.com/photo-1547824328-963e7a08479a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxWaVxDMyVCMCVDMyVCMWFscyUyMFZhbGxleXxlbnwwfHx8fDE3NTk0MDQwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'Vinales Valley'
    },
    region: 'Pinar del Río Province',
    bestTime: 'December to May',
    duration: '2-3 days',
    highlights: 'Iconic mogotes (limestone karst formations), traditional tobacco farms, extensive cave systems',
    natureElements: 'Lush green landscapes, unique geological formations, a UNESCO World Heritage site',
    activities: 'Horseback riding, hiking, visiting tobacco plantations, exploring caves',
  },
];

export default function CubaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Cuba: A Journey Back in Time
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience a country where time seems to stand still, with its classic cars, colonial architecture, and rhythms of salsa filling the air.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {cubaLocations.map((location) => (
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
