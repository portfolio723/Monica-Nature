import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const portugalLocations = [
  {
    id: 'azores',
    name: 'The Azores Islands',
    image: placeholderImages.find((img) => img.id === 'portugal-azores'),
    region: 'Autonomous Region of the Azores',
    bestTime: 'June - September',
    duration: '5-8 days',
    highlights: 'Volcanic crater lakes (Sete Cidades), whale watching, natural hot springs',
    natureElements: 'Lush green landscapes, volcanic geology, rich marine biodiversity',
    activities: 'Hiking, whale and dolphin watching, canyoning, diving',
  },
  {
    id: 'algarve',
    name: 'Algarve Coast',
    image: placeholderImages.find((img) => img.id === 'portugal-algarve'),
    region: 'Algarve',
    bestTime: 'May - June, September - October',
    duration: '4-6 days',
    highlights: 'Stunning sea caves like Benagil Cave, dramatic golden cliffs, beautiful beaches',
    natureElements: 'Limestone rock formations, sandy beaches, coastal nature reserves',
    activities: 'Boat tours to sea caves, kayaking, hiking the Seven Hanging Valleys Trail',
  },
];

export default function PortugalPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Portugal: Atlantic Edge of Europe
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the volcanic wonders of the Azores archipelago to the sun-kissed cliffs of the Algarve, Portugal offers a stunning Atlantic coastline.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {portugalLocations.map((location) => (
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

    