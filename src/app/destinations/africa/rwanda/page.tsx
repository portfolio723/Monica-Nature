import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const rwandaLocations = [
  {
    id: 'volcanoes-national-park',
    name: 'Volcanoes National Park',
    image: placeholderImages.find((img) => img.id === 'rwanda-volcanoes'),
    region: 'Northern Province',
    bestTime: 'June - September, December - February',
    duration: '2-3 days',
    highlights: 'Once-in-a-lifetime mountain gorilla trekking, tracking golden monkeys, Dian Fossey`s tomb',
    natureElements: 'Chain of dormant volcanoes, bamboo forests, high-altitude rainforest',
    activities: 'Gorilla trekking, golden monkey tracking, hiking, bird watching',
  },
  {
    id: 'nyungwe-forest',
    name: 'Nyungwe Forest National Park',
    image: placeholderImages.find((img) => img.id === 'kenya-amboseli'), // Using placeholder
    region: 'Western Province',
    bestTime: 'June - September',
    duration: '2-4 days',
    highlights: 'Canopy walkway offering a unique perspective of the forest, chimpanzee tracking',
    natureElements: 'One of Africa`s oldest and most biodiverse rainforests',
    activities: 'Chimpanzee tracking, canopy walk, hiking, bird watching',
  },
];

export default function RwandaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Rwanda: Land of a Thousand Hills
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a country of remarkable resilience and breathtaking beauty, from the misty mountains home to gorillas to the ancient rainforests teeming with life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {rwandaLocations.map((location) => (
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

    