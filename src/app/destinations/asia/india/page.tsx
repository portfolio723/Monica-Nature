import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const indiaLocations = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal & Agra',
    image: placeholderImages.find((img) => img.id === 'india-taj-mahal'),
    region: 'Uttar Pradesh, North India',
    bestTime: 'October - March',
    duration: '2-3 days',
    highlights: 'UNESCO World Heritage monument, Agra Fort, Fatehpur Sikri',
    natureElements: 'Yamuna River, Mughal gardens, migratory birds',
    activities: 'Heritage walks, photography, cultural tours',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Golden Triangle',
    image: placeholderImages.find((img) => img.id === 'india-rajasthan'),
    region: 'Rajasthan, North India',
    bestTime: 'October - March',
    duration: '7-10 days',
    highlights: 'Jaipur (Pink City), Jodhpur (Blue City), Udaipur (City of Lakes)',
    natureElements: 'Thar Desert, Aravalli hills, desert wildlife',
    activities: 'Desert camping, palace tours, cultural performances',
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    image: placeholderImages.find((img) => img.id === 'india-kerala'),
    region: 'Kerala, South India',
    bestTime: 'October - March',
    duration: '4-6 days',
    highlights: 'Alleppey houseboat cruises, Kumarakom Bird sanctuary',
    natureElements: 'Network of lagoons, lakes, canals, and rivers',
    activities: 'Houseboat stays, bird watching, Ayurvedic treatments',
  },
  {
    id: 'himalayas',
    name: 'Himalayan Adventures',
    image: placeholderImages.find((img) => img.id === 'india-himalayas'),
    region: 'Himachal Pradesh, Uttarakhand',
    bestTime: 'March - June, September - November',
    duration: '7-14 days',
    highlights: 'Manali, Rishikesh, Valley of Flowers National Park',
    natureElements: 'Alpine meadows, glacial rivers, dense forests',
    activities: 'Trekking, white-water rafting, yoga retreats',
  },
];

export default function IndiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            India: Where Ancient Wisdom Meets Natural Splendor
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the snow-capped Himalayas to tropical beaches, India offers
            diverse landscapes and rich cultural heritage spanning 5,000 years.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {indiaLocations.map((location) => (
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
                    <strong>Nature & Activities:</strong> {location.natureElements}
                    . {location.activities}.
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
