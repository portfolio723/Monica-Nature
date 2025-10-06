
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const zambiaLocations = [
  {
    id: 'victoria-falls',
    name: 'Victoria Falls (Mosi-oa-Tunya)',
    image: {
      id: 'zambia-victoria-falls',
      description: 'Aerial view of Victoria Falls on the Zambezi River.',
      imageUrl: 'https://images.unsplash.com/photo-1602081593810-7453a5578714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxWaWN0b3JpYSUyMEZhbGxzfGVufDB8fHx8MTc2MDAxMjM4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'Victoria Falls aerial'
    },
    region: 'Livingstone, Southern Province',
    bestTime: 'February - May (for peak flow), June - October (for activities)',
    duration: '2-3 days',
    highlights: 'One of the Seven Natural Wonders of the World, Devil`s Pool, lunar rainbows',
    natureElements: 'The world`s largest sheet of falling water, lush rainforest microclimate, dramatic gorges',
    activities: 'Viewing the falls, helicopter flights, white-water rafting, bungee jumping',
  },
  {
    id: 'south-luangwa',
    name: 'South Luangwa National Park',
    image: {
      id: 'zambia-south-luangwa',
      description: 'A leopard resting in a tree in South Luangwa National Park.',
      imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e078aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEx1YW5nd2ElMjBOYXRpb25hbCUyMFBhcmslMjBsZW9wYXJkfGVufDB8fHx8MTc2MDAxMjM4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'South Luangwa leopard'
    },
    region: 'Eastern Province',
    bestTime: 'May - October (dry season)',
    duration: '4-6 days',
    highlights: 'The birthplace of the walking safari, incredible leopard density, huge herds of elephants and buffalo',
    natureElements: 'Luangwa River oxbow lagoons, ebony groves, vast savannah',
    activities: 'Walking safaris, day and night game drives, bird watching',
  },
];

export default function ZambiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Zambia: The Real Africa, Land of the Smoke That Thunders
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience the raw beauty of Africa, from the awe-inspiring Victoria Falls to the legendary walking safaris of South Luangwa.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {zambiaLocations.map((location) => (
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
