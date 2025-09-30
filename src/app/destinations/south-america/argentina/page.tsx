import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const argentinaLocations = [
  {
    id: 'patagonia',
    name: 'Patagonia: Glaciers & Mountains',
    image: placeholderImages.find((img) => img.id === 'argentina-patagonia'),
    region: 'El Calafate & El Chaltén',
    bestTime: 'October - April (spring and summer)',
    duration: '6-8 days',
    highlights: 'Trekking on Perito Moreno Glacier, hiking to the base of Mount Fitz Roy',
    natureElements: 'Vast ice fields, dramatic granite peaks, and pristine glacial lakes',
    activities: 'Glacier trekking, hiking, ice climbing, photography',
  },
  {
    id: 'iguazu-falls',
    name: 'Iguazu Falls',
    image: placeholderImages.find((img) => img.id === 'argentina-iguazu'),
    region: 'Misiones Province',
    bestTime: 'March - May, September - November',
    duration: '2-3 days',
    highlights: 'Experiencing the immense power and scale of one of the world`s largest waterfall systems',
    natureElements: 'Subtropical rainforest surrounding the falls, diverse birdlife',
    activities: 'Walking trails on Argentinian and Brazilian sides, boat trips under the falls',
  },
];

export default function ArgentinaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Argentina: From Tango to Glaciers
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience a country of epic scale, from the thundering Iguazu Falls in the north to the awe-inspiring glaciers and peaks of Patagonia in the south.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {argentinaLocations.map((location) => (
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
