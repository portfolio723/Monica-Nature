
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const fijiLocations = [
  {
    id: 'mamanuca-islands',
    name: 'Mamanuca Islands',
    image: placeholderImages.find((img) => img.id === 'oceania-fiji'),
    region: 'Western Division',
    bestTime: 'May to October',
    duration: '4-7 days',
    highlights: 'Pristine white sand beaches, world-class surfing at Cloudbreak, stunning coral reefs for snorkeling and diving',
    natureElements: 'Crystal-clear turquoise waters, vibrant marine life, idyllic tropical islands',
    activities: 'Island hopping, snorkeling, diving, surfing, relaxing on the beach',
  },
  {
    id: 'tavoro-waterfalls',
    name: 'Tavoro Waterfalls (Bouma National Heritage Park)',
    image: {
      id: 'fiji-waterfall',
      description: 'Lush waterfall in Fiji',
      imageUrl: 'https://images.unsplash.com/photo-1594917457116-2c9a1a8c0883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxGaWppJTIwd2F0ZXJmYWxsfGVufDB8fHx8MTc1OTQwMzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'fiji waterfall'
    },
    region: 'Taveuni Island',
    bestTime: 'May to October',
    duration: '1 day',
    highlights: 'A series of three spectacular waterfalls with natural swimming pools, lush rainforest trails',
    natureElements: 'Dense tropical rainforest, endemic birds, volcanic landscapes',
    activities: 'Hiking, swimming in waterfall pools, bird watching, village visits',
  },
];

export default function FijiPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Fiji: The Essence of Tropical Paradise
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Welcome to a nation of over 300 islands, famous for its friendly people, stunning coral reefs, and idyllic beaches.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {fijiLocations.map((location) => (
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
