import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const indonesiaLocations = [
  {
    id: 'bali',
    name: 'Bali: Island of the Gods',
    image: placeholderImages.find((img) => img.id === 'indonesia-bali'),
    region: 'Bali',
    bestTime: 'April - October (dry season)',
    duration: '5-10 days',
    highlights: 'Ubud`s rice terraces and temples, surfing in Canggu, spiritual retreats',
    natureElements: 'Volcanic mountains, lush rice paddies, vibrant coral reefs',
    activities: 'Surfing, yoga, temple visiting, diving, hiking',
  },
  {
    id: 'komodo',
    name: 'Komodo National Park',
    image: placeholderImages.find((img) => img.id === 'indonesia-komodo'),
    region: 'East Nusa Tenggara',
    bestTime: 'April - December',
    duration: '3-4 days (liveaboard)',
    highlights: 'Seeing Komodo dragons in the wild, Padar Island viewpoint, pink beaches',
    natureElements: 'Savannah-like landscapes, world-class marine biodiversity',
    activities: 'Liveaboard boat trips, diving, snorkeling, hiking',
  },
  {
    id: 'borobudur',
    name: 'Borobudur & Prambanan',
    image: placeholderImages.find((img) => img.id === 'indonesia-borobudur'),
    region: 'Central Java',
    bestTime: 'April - October',
    duration: '2-3 days',
    highlights: 'Sunrise at Borobudur (world`s largest Buddhist temple), Hindu complex of Prambanan',
    natureElements: 'Views of Mount Merapi volcano, lush Javanese countryside',
    activities: 'Archaeological tours, sunrise photography, cultural exploration',
  },
  {
    id: 'raja-ampat',
    name: 'Raja Ampat Islands',
    image: placeholderImages.find((img) => img.id === 'indonesia-raja-ampat'),
    region: 'West Papua',
    bestTime: 'October - April',
    duration: '7-10 days (liveaboard)',
    highlights: 'Richest marine biodiversity on Earth, iconic karst island seascapes',
    natureElements: 'Pristine coral reefs, jungle-covered islands, hidden lagoons',
    activities: 'World-class diving and snorkeling, kayaking, bird watching',
  },
];

export default function IndonesiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Indonesia: 17,000 Islands of Wonder
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the spiritual heart of Bali to the prehistoric Komodo dragons and the underwater paradise of Raja Ampat, Indonesia is an archipelago of adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {indonesiaLocations.map((location) => (
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
