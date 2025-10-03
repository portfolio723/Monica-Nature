
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const jamaicaLocations = [
  {
    id: 'blue-mountains',
    name: 'Blue Mountains National Park',
    image: {
      id: 'jamaica-mountains',
      description: 'The Blue Mountains in Jamaica',
      imageUrl: 'https://images.unsplash.com/photo-1614777749005-24a434c44569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxqYW1haWNhJTIwbW91bnRhaW5zfGVufDB8fHx8MTc1OTQwMzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'jamaica mountains'
    },
    region: 'Eastern Jamaica',
    bestTime: 'December to April',
    duration: '2-3 days',
    highlights: 'Hiking or mule ride to the peak for sunrise, world-renowned coffee plantations, incredible biodiversity',
    natureElements: 'Lush, misty mountains, a UNESCO World Heritage site, home to hundreds of endemic plant and bird species',
    activities: 'Hiking, bird watching, coffee plantation tours, mountain biking',
  },
  {
    id: 'dunns-river-falls',
    name: 'Dunn`s River Falls',
    image: placeholderImages.find((img) => img.id === 'caribbean-jamaica'),
    region: 'Ocho Rios',
    bestTime: 'Year-round',
    duration: 'Half-day',
    highlights: 'Climbing the famous 600-foot terraced waterfall, natural swimming lagoons',
    natureElements: 'A living, growing waterfall that constantly regenerates itself from deposits of travertine rock',
    activities: 'Waterfall climbing with a guide, swimming, relaxing on the adjacent beach',
  },
];

export default function JamaicaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Jamaica: The Heartbeat of the Caribbean
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the cool peaks of the Blue Mountains to the cascading Dunn`s River Falls, discover an island of lush landscapes and infectious energy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {jamaicaLocations.map((location) => (
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
