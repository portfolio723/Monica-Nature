import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const canadaLocations = [
  {
    id: 'banff',
    name: 'Banff National Park',
    image: placeholderImages.find((img) => img.id === 'canada-banff'),
    region: 'Alberta',
    bestTime: 'June - August, December - March (for skiing)',
    duration: '4-6 days',
    highlights: 'Turquoise waters of Lake Louise and Moraine Lake, scenic Icefields Parkway drive',
    natureElements: 'Glacier-fed lakes, majestic Rocky Mountains, abundant wildlife like bears and elk',
    activities: 'Hiking, canoeing, wildlife viewing, skiing',
  },
  {
    id: 'jasper',
    name: 'Jasper National Park',
    image: placeholderImages.find((img) => img.id === 'canada-jasper'),
    region: 'Alberta',
    bestTime: 'June - September',
    duration: '3-5 days',
    highlights: 'Spirit Island in Maligne Lake, Athabasca Glacier, dark sky preserve for stargazing',
    natureElements: 'Largest national park in the Canadian Rockies, immense glaciers, and pristine wilderness',
    activities: 'Hiking, glacier tours, stargazing, kayaking',
  },
];

export default function CanadaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Canada: Wilderness at Its Finest
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore the vast, untamed beauty of the Canadian Rockies, where turquoise lakes reflect jagged peaks and wildlife roams free.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {canadaLocations.map((location) => (
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
