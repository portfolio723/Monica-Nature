import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const kenyaLocations = [
  {
    id: 'masai-mara',
    name: 'Masai Mara National Reserve',
    image: placeholderImages.find((img) => img.id === 'kenya-masai-mara'),
    region: 'Rift Valley Province',
    bestTime: 'July - October (Great Migration)',
    duration: '3-4 days',
    highlights: 'The Great Wildebeest Migration, high density of lions, cheetahs, and other predators',
    natureElements: 'Vast open grasslands, acacia woodlands, Mara River',
    activities: 'Game drives, hot air balloon safaris, cultural visits to Maasai villages',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    image: placeholderImages.find((img) => img.id === 'kenya-amboseli'),
    region: 'Kajiado County',
    bestTime: 'June - October, January - February',
    duration: '2-3 days',
    highlights: 'Iconic views of Mount Kilimanjaro, large herds of free-ranging elephants',
    natureElements: 'Swamps, dusty plains, and the backdrop of Africa`s highest peak',
    activities: 'Game drives, photography, visiting Observation Hill',
  },
];

export default function KenyaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Kenya: Home of the Great Migration
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the iconic plains of the Masai Mara to the elephant-filled Amboseli with views of Kilimanjaro, Kenya is the quintessential safari destination.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {kenyaLocations.map((location) => (
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

    