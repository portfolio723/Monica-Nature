import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const ethiopiaLocations = [
  {
    id: 'simien-mountains',
    name: 'Simien Mountains National Park',
    image: placeholderImages.find((img) => img.id === 'africa-ethiopia-simien'),
    region: 'Amhara Region',
    bestTime: 'October - June',
    duration: '4-8 days',
    highlights: 'Trekking along dramatic escarpments, spotting endemic wildlife like the Gelada baboon and Walia ibex',
    natureElements: 'Jagged mountain peaks, deep valleys, and high-altitude plateaus, a UNESCO World Heritage site',
    activities: 'Trekking, wildlife viewing, bird watching',
  },
  {
    id: 'danakil-depression',
    name: 'Danakil Depression',
    image: placeholderImages.find((img) => img.id === 'africa-ethiopia-danakil'),
    region: 'Afar Region',
    bestTime: 'November - February',
    duration: '3-4 days',
    highlights: 'One of the hottest and lowest places on Earth, otherworldly landscapes of sulfur springs, salt flats, and lava lakes',
    natureElements: 'Surreal geothermal landscapes, active volcanoes (Erta Ale)',
    activities: 'Expedition tours, photography, visiting salt miners',
  },
];

export default function EthiopiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Ethiopia: The Roof of Africa
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a land of ancient history and extreme landscapes, from the high-altitude Simien Mountains to the alien world of the Danakil Depression.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {ethiopiaLocations.map((location) => (
            <div
              key={location.id}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-80 w-full">
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
