import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const peruLocations = [
  {
    id: 'machu-picchu',
    name: 'Machu Picchu & the Sacred Valley',
    image: placeholderImages.find((img) => img.id === 'peru-machu-picchu'),
    region: 'Cusco Region',
    bestTime: 'April - October (dry season)',
    duration: '4-5 days',
    highlights: 'Exploring the lost city of the Incas, hiking the Inca Trail, visiting ancient ruins in the Sacred Valley',
    natureElements: 'High-altitude Andean landscapes, dramatic mountain scenery',
    activities: 'Trekking, historical tours, cultural immersion, photography',
  },
  {
    id: 'amazon',
    name: 'Peruvian Amazon Rainforest',
    image: placeholderImages.find((img) => img.id === 'peru-amazon'),
    region: 'Tambopata, Iquitos',
    bestTime: 'April - October',
    duration: '3-5 days',
    highlights: 'Staying in jungle lodges, spotting unique wildlife like macaws, monkeys, and river otters',
    natureElements: 'One of the most biodiverse places on Earth, dense jungle, winding rivers',
    activities: 'Jungle treks, river cruises, wildlife spotting, bird watching',
  },
];

export default function PeruPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Peru: Land of the Incas
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Journey from the misty peaks of the Andes and the ancient citadel of Machu Picchu to the vibrant depths of the Amazon rainforest.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {peruLocations.map((location) => (
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
