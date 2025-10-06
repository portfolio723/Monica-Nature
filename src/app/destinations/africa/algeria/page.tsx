
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const algeriaLocations = [
  {
    id: 'tassili-najjer',
    name: 'Tassili n`Ajjer National Park',
    image: {
      id: 'algeria-tassili',
      description: 'Prehistoric rock art in Tassili n`Ajjer, Algeria',
      imageUrl: 'https://images.unsplash.com/photo-1604725333534-735492a5a5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxUYXNzaWxpJTIwbiUyNUMyJUI0QWpqZXJ8ZW58MHx8fHwxNzYwMDEyMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'Tassili n`Ajjer rock art'
    },
    region: 'Southeast Algeria',
    bestTime: 'October - April',
    duration: '5-7 days',
    highlights: 'One of the world`s most important collections of prehistoric rock art, dramatic sandstone mountain range',
    natureElements: 'Unique geological formations of "rock forests", vast desert landscapes, a UNESCO World Heritage site',
    activities: '4x4 expeditions, trekking, discovering ancient rock paintings and engravings',
  },
  {
    id: 'casbah-algiers',
    name: 'Casbah of Algiers',
    image: {
      id: 'algeria-casbah',
      description: 'The narrow streets of the Casbah of Algiers, Algeria',
      imageUrl: 'https://images.unsplash.com/photo-1628087955610-833327570414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxDYXNiYWglMjBvZiUyMEFsZ2llcnN8ZW58MHx8fHwxNzYwMDEyMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'Casbah Algiers streets'
    },
    region: 'Algiers',
    bestTime: 'March - May, September - November',
    duration: '1-2 days',
    highlights: 'A maze of narrow, winding streets, historic mosques and Ottoman-style palaces, a UNESCO World Heritage site',
    natureElements: 'A unique urban landscape overlooking the Mediterranean Sea',
    activities: 'Guided historical tours, exploring traditional architecture, photography, visiting local souks',
  },
];

export default function AlgeriaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Algeria: Gateway to the Sahara
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a land of immense history and dramatic landscapes, from the ancient rock art of the Sahara to the labyrinthine Casbah of Algiers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {algeriaLocations.map((location) => (
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
