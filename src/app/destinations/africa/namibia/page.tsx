import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const namibiaLocations = [
  {
    id: 'sossusvlei',
    name: 'Sossusvlei & Deadvlei',
    image: placeholderImages.find((img) => img.id === 'namibia-sossusvlei'),
    region: 'Namib-Naukluft National Park',
    bestTime: 'May - October',
    duration: '2-3 days',
    highlights: 'Climbing the world`s tallest sand dunes (Big Daddy, Dune 45), the stark white clay pan of Deadvlei with its ancient trees',
    natureElements: 'Towering red sand dunes, surreal desert landscapes',
    activities: 'Dune climbing, photography, 4x4 excursions',
  },
  {
    id: 'etosha',
    name: 'Etosha National Park',
    image: placeholderImages.find((img) => img.id === 'namibia-etosha'),
    region: 'Kunene Region',
    bestTime: 'May - October (dry season for waterhole viewing)',
    duration: '3-4 days',
    highlights: 'Floodlit waterholes at camps offering incredible nighttime wildlife viewing, vast salt pan',
    natureElements: 'Massive salt pan visible from space, numerous waterholes attracting wildlife',
    activities: 'Game drives (self-drive or guided), wildlife photography',
  },
];

export default function NamibiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Namibia: Desert Meets Ocean Spectacle
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience the dramatic and surreal landscapes of Namibia, from the towering red dunes of Sossusvlei to the wildlife-rich salt pans of Etosha.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {namibiaLocations.map((location) => (
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

    