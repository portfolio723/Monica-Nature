import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const singaporeLocations = [
  {
    id: 'gardens-by-the-bay',
    name: 'Gardens by the Bay',
    image: placeholderImages.find((img) => img.id === 'singapore-gardens'),
    region: 'Marina Bay',
    bestTime: 'Year-round',
    duration: '1 day',
    highlights: 'Supertrees Grove, Cloud Forest dome with indoor waterfall, Flower Dome',
    natureElements: 'Futuristic botanical gardens, diverse plant life from around the world',
    activities: 'Walking the OCBC Skyway, exploring cooled conservatories, light shows',
  },
  {
    id: 'skyline',
    name: 'Urban Metropolis & Nature Parks',
    image: placeholderImages.find((img) => img.id === 'singapore-skyline'),
    region: 'Central Singapore',
    bestTime: 'Year-round',
    duration: '2-3 days',
    highlights: 'Singapore Botanic Gardens (UNESCO site), MacRitchie Reservoir TreeTop Walk',
    natureElements: 'Seamless integration of green spaces within a dense city',
    activities: 'Hiking, bird watching, exploring the city`s green corridors',
  },
  {
    id: 'food-culture',
    name: 'Culinary & Cultural Hotspots',
    image: placeholderImages.find((img) => img.id === 'singapore-food'),
    region: 'Various neighborhoods',
    bestTime: 'Year-round',
    duration: '2 days',
    highlights: 'Sampling diverse street food at hawker centres, exploring Kampong Glam and Little India',
    natureElements: 'Urban farms and community gardens',
    activities: 'Food tours, cultural walks, shopping in vibrant districts',
  },
  {
    id: 'jewel-changi',
    name: 'Jewel Changi Airport',
    image: placeholderImages.find((img) => img.id === 'singapore-jewel'),
    region: 'East',
    bestTime: 'Year-round',
    duration: '4-6 hours',
    highlights: 'The Rain Vortex (world`s tallest indoor waterfall), Shiseido Forest Valley',
    natureElements: 'Lush indoor forest with thousands of trees and plants',
    activities: 'Shopping, dining, exploring the canopy park',
  },
];

export default function SingaporePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Singapore: The Garden City
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience the future of urban living where cutting-edge architecture and lush nature coexist in stunning harmony.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {singaporeLocations.map((location) => (
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
