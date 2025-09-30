
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const australiaLocations = [
  {
    id: 'great-barrier-reef',
    name: 'Great Barrier Reef',
    image: placeholderImages.find((img) => img.id === 'australia-reef'),
    region: 'Queensland',
    bestTime: 'June - October',
    duration: '3-5 days',
    highlights: 'World`s largest coral reef system, incredible marine biodiversity, Heart Reef',
    natureElements: 'Vibrant coral gardens, tropical islands (Whitsundays), diverse marine life including turtles and reef sharks',
    activities: 'Snorkeling, diving, scenic flights, sailing',
  },
  {
    id: 'uluru',
    name: 'Uluru-Kata Tjuta National Park',
    image: placeholderImages.find((img) => img.id === 'australia-uluru'),
    region: 'Northern Territory (The Red Centre)',
    bestTime: 'May - September',
    duration: '2-3 days',
    highlights: 'The iconic sandstone monolith of Uluru, the domed rock formations of Kata Tjuta, powerful sunrises and sunsets',
    natureElements: 'Vast desert landscapes, significant spiritual and cultural importance to Indigenous Australians',
    activities: 'Base walk around Uluru, cultural tours with Anangu guides, stargazing',
  },
];

export default function AustraliaCountryPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Australia: Land of Unique Wildlife
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the underwater wonders of the Great Barrier Reef to the spiritual heart of the outback, Australia is a continent of staggering scale and diversity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {australiaLocations.map((location) => (
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

    