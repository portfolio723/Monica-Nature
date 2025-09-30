import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const nepalLocations = [
  {
    id: 'everest-region',
    name: 'Everest Base Camp Trek',
    image: placeholderImages.find((img) => img.id === 'nepal-everest'),
    region: 'Khumbu region',
    bestTime: 'March-May, September-November',
    duration: '12-14 days',
    highlights: 'Trekking to the base of the world`s highest peak, Sherpa culture, Tengboche Monastery',
    natureElements: 'Towering Himalayan peaks, glaciers, unique high-altitude flora and fauna',
    activities: 'High-altitude trekking, mountaineering, cultural immersion',
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    image: placeholderImages.find((img) => img.id === 'nepal-annapurna'),
    region: 'Annapurna region',
    bestTime: 'March-May, October-November',
    duration: '10-18 days',
    highlights: 'Diverse landscapes from subtropical to alpine, Thorong La Pass, traditional villages',
    natureElements: 'Rhododendron forests, deep gorges, snow-capped peaks',
    activities: 'Trekking, tea house stays, landscape photography',
  },
  {
    id: 'kathmandu-valley',
    name: 'Kathmandu Valley Cultural Tour',
    image: placeholderImages.find((img) => img.id === 'nepal-kathmandu'),
    region: 'Central Nepal',
    bestTime: 'September-November, February-April',
    duration: '3-4 days',
    highlights: 'UNESCO World Heritage sites: Boudhanath Stupa, Pashupatinath Temple, Bhaktapur Durbar Square',
    natureElements: 'Valley surrounded by rolling hills, views of the Himalayas on clear days',
    activities: 'Temple tours, exploring ancient cities, cultural workshops',
  },
  {
    id: 'chitwan-national-park',
    name: 'Chitwan National Park Safari',
    image: placeholderImages.find((img) => img.id === 'nepal-chitwan'),
    region: 'Terai lowlands',
    bestTime: 'October - March',
    duration: '2-3 days',
    highlights: 'Spotting one-horned rhinos, Bengal tigers, and diverse birdlife',
    natureElements: 'Subtropical grasslands, dense forests, river ecosystems',
    activities: 'Jungle safaris (jeep and canoe), bird watching, learning about conservation efforts',
  },
];

export default function NepalPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Nepal: Adventures at the Roof of the World
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Home to eight of the world`s ten highest peaks, Nepal is a trekker`s paradise, offering spiritual journeys and profound encounters with nature.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {nepalLocations.map((location) => (
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
