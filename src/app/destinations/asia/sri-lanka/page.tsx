import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const sriLankaLocations = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    image: placeholderImages.find((img) => img.id === 'sri-lanka-sigiriya'),
    region: 'Central Province',
    bestTime: 'January - April, July - September',
    duration: '1-2 days',
    highlights: 'Climbing the ancient rock fortress, admiring the frescoes, panoramic summit views',
    natureElements: 'Lush jungle surroundings, ancient water gardens',
    activities: 'Hiking, historical tours, photography',
  },
  {
    id: 'tea-country',
    name: 'Hill Country & Tea Plantations',
    image: placeholderImages.find((img) => img.id === 'sri-lanka-tea-plantations'),
    region: 'Nuwara Eliya, Ella',
    bestTime: 'December - March',
    duration: '3-4 days',
    highlights: 'Scenic train ride from Kandy to Ella, hiking Little Adam`s Peak, visiting tea factories',
    natureElements: 'Verdant rolling hills covered in tea, waterfalls, cooler climate',
    activities: 'Hiking, tea tasting, scenic train journeys',
  },
  {
    id: 'yala-national-park',
    name: 'Yala National Park',
    image: placeholderImages.find((img) => img.id === 'sri-lanka-yala'),
    region: 'Southeast Coast',
    bestTime: 'February - June (dry season for better sightings)',
    duration: '2-3 days',
    highlights: 'Highest density of leopards in the world, spotting elephants, sloth bears, and crocodiles',
    natureElements: 'Diverse ecosystems from scrub jungle to coastal wetlands',
    activities: 'Wildlife safaris (jeep), bird watching',
  },
  {
    id: 'southern-beaches',
    name: 'Southern Beaches',
    image: placeholderImages.find((img) => img.id === 'sri-lanka-beaches'),
    region: 'Mirissa, Unawatuna, Galle',
    bestTime: 'December - April',
    duration: '3-5 days',
    highlights: 'Whale watching in Mirissa, stilt fishermen, historic Galle Fort',
    natureElements: 'Golden sand beaches, coconut palms, coral reefs',
    activities: 'Surfing, snorkeling, whale watching, relaxing',
  },
];

export default function SriLankaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Sri Lanka: The Pearl of the Indian Ocean
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover an island of incredible diversity, from ancient cities and lush tea plantations to pristine beaches and wildlife-rich national parks.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {sriLankaLocations.map((location) => (
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
