
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const barbadosLocations = [
  {
    id: 'harrisons-cave',
    name: 'Harrison`s Cave',
    image: {
      id: 'barbados-cave',
      description: 'Harrison`s Cave in Barbados',
      imageUrl: 'https://images.unsplash.com/photo-1594917457116-2c9a1a8c0883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxCYXJiYWRvcyUyMGNhdmV8ZW58MHx8fHwxNzU5NDAzNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'barbados cave'
    },
    region: 'Saint Thomas Parish',
    bestTime: 'December to April',
    duration: 'Half-day',
    highlights: 'An underground world of crystallized limestone caves, flowing streams, and towering columns',
    natureElements: 'Stalactites, stalagmites, and breathtaking caverns explored via electric tram',
    activities: 'Cave tours, exploring the visitor center, nature trails',
  },
  {
    id: 'crane-beach',
    name: 'Crane Beach',
    image: placeholderImages.find((img) => img.id === 'caribbean-barbados'),
    region: 'Saint Philip Parish',
    bestTime: 'December to April',
    duration: '1 day',
    highlights: 'Famous for its stunning pink-tinged sand and powerful waves, often cited as one of the world`s best beaches',
    natureElements: 'Dramatic cliffs, turquoise water, and a natural coral reef barrier',
    activities: 'Sunbathing, boogie boarding, photography, cliff jumping for the adventurous',
  },
];

export default function BarbadosPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Barbados: The Gem of the Caribbean Sea
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore an island of contrasts, from the rugged Atlantic coast to the calm, platinum beaches of the Caribbean, rich in history and natural wonders.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {barbadosLocations.map((location) => (
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
