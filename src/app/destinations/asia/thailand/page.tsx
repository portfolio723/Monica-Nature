import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const thailandLocations = [
  {
    id: 'phi-phi-islands',
    name: 'Phi Phi Islands & Krabi',
    image: placeholderImages.find((img) => img.id === 'thailand-phi-phi'),
    region: 'Andaman Sea, Southern Thailand',
    bestTime: 'November - April',
    duration: '4-6 days',
    highlights: 'Maya Bay, limestone karsts, world-class diving and snorkeling',
    natureElements: 'Pristine coral reefs, turquoise waters, dramatic cliffs',
    activities: 'Island hopping, diving, rock climbing, beach relaxation',
  },
  {
    id: 'chiang-mai',
    name: 'Chiang Mai & Golden Triangle',
    image: placeholderImages.find((img) => img.id === 'thailand-chiang-mai'),
    region: 'Northern Thailand',
    bestTime: 'October - February (cool, dry season)',
    duration: '4-5 days',
    highlights: 'Ethical elephant sanctuaries, ancient temples, vibrant night markets',
    natureElements: 'Lush mountains, rice paddies, diverse hill tribe cultures',
    activities: 'Jungle trekking, visiting elephant sanctuaries, exploring temples',
  },
  {
    id: 'bangkok',
    name: 'Bangkok`s Temples & Canals',
    image: placeholderImages.find((img) => img.id === 'thailand-bangkok'),
    region: 'Central Thailand',
    bestTime: 'November - February',
    duration: '2-3 days',
    highlights: 'Grand Palace, Wat Arun, floating markets, bustling street food scene',
    natureElements: 'Chao Phraya River, urban parks, canal (khlong) networks',
    activities: 'Cultural tours, river cruises, culinary exploration',
  },
  {
    id: 'beaches',
    name: 'Gulf Coast Islands',
    image: placeholderImages.find((img) => img.id === 'thailand-beaches'),
    region: 'Gulf of Thailand',
    bestTime: 'January - September',
    duration: '5-7 days',
    highlights: 'Full Moon Party on Koh Phangan, luxury resorts on Koh Samui, diving on Koh Tao',
    natureElements: 'White sand beaches, coconut groves, vibrant marine life',
    activities: 'Diving, snorkeling, wellness retreats, beach parties',
  },
];

export default function ThailandPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Thailand: Tropical Paradise & Cultural Richness
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From idyllic beaches and lush jungles to ornate temples and a world-famous culinary scene, Thailand is a feast for the senses.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {thailandLocations.map((location) => (
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
