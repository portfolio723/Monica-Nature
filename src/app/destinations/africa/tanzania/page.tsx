import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const tanzaniaLocations = [
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    image: placeholderImages.find((img) => img.id === 'tanzania-serengeti'),
    region: 'Northern Tanzania',
    bestTime: 'June - October (Great Migration in central/west), January - March (calving season in south)',
    duration: '4-5 days',
    highlights: 'Witnessing the Great Migration, classic African savannah landscapes, predator action',
    natureElements: 'Endless plains, acacia trees, river systems',
    activities: 'Game drives, hot air balloon safaris',
  },
  {
    id: 'ngorongoro-crater',
    name: 'Ngorongoro Crater',
    image: placeholderImages.find((img) => img.id === 'tanzania-ngorongoro'),
    region: 'Northern Tanzania',
    bestTime: 'June - October',
    duration: '1-2 days',
    highlights: 'World`s largest intact volcanic caldera, extremely high density of wildlife including the Big Five',
    natureElements: 'Unique enclosed ecosystem with lakes, forests, and plains',
    activities: 'Game drives on the crater floor',
  },
];

export default function TanzaniaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Tanzania: Serengeti & Beyond
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Home to the legendary Serengeti and the breathtaking Ngorongoro Crater, Tanzania offers some of the most spectacular wildlife viewing on the planet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {tanzaniaLocations.map((location) => (
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

    