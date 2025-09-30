import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const japanLocations = [
  {
    id: 'mt-fuji',
    name: 'Mount Fuji & Hakone',
    image: placeholderImages.find((img) => img.id === 'japan-mt-fuji'),
    region: 'Chūbu region',
    bestTime: 'Autumn (Sept-Nov) for views, Summer (July-Aug) for climbing',
    duration: '2-3 days',
    highlights:
      'Iconic views of Mt. Fuji, Hakone hot springs (onsen), Lake Ashi cruises',
    natureElements: 'Volcanic landscapes, pristine lakes, forested trails',
    activities: 'Hiking, photography, relaxing in onsen, scenic boat trips',
  },
  {
    id: 'kyoto',
    name: 'Kyoto`s Temples & Gardens',
    image: placeholderImages.find((img) => img.id === 'japan-kyoto'),
    region: 'Kansai region',
    bestTime: 'Spring (Mar-May) for cherry blossoms, Autumn (Oct-Nov) for fall colors',
    duration: '3-5 days',
    highlights: 'Kinkaku-ji (Golden Pavilion), Fushimi Inari Shrine, Arashiyama Bamboo Grove',
    natureElements: 'Manicured Zen gardens, bamboo forests, seasonal foliage',
    activities: 'Temple hopping, garden strolls, traditional tea ceremonies',
  },
  {
    id: 'hokkaido',
    name: 'Hokkaido`s Wilderness',
    image: placeholderImages.find((img) => img.id === 'japan-hokkaido'),
    region: 'Hokkaido island',
    bestTime: 'Winter (Dec-Feb) for snow, Summer (June-Aug) for hiking',
    duration: '5-7 days',
    highlights: 'World-class skiing in Niseko, lavender fields in Furano, Daisetsuzan National Park',
    natureElements: 'Vast national parks, volcanic caldera lakes, abundant wildlife',
    activities: 'Skiing/snowboarding, hiking, wildlife viewing, flower viewing',
  },
  {
    id: 'hot-springs',
    name: 'Japanese Alps & Onsen',
    image: placeholderImages.find((img) => img.id === 'japan-hot-springs'),
    region: 'Chūbu region',
    bestTime: 'Year-round, especially autumn and winter',
    duration: '4-6 days',
    highlights: 'Historic villages of Shirakawa-go, hiking in Kamikochi, relaxing in Takaragawa Onsen',
    natureElements: 'Dramatic mountain scenery, alpine flora, geothermal hot springs',
    activities: 'Mountain hiking, soaking in natural hot springs, exploring traditional villages',
  },
];

export default function JapanPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Japan: Where Ancient Tradition Meets Natural Beauty
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore a land of serene temples, dramatic mountains, and profound respect for nature, from cherry blossoms in spring to fiery autumn maples.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {japanLocations.map((location) => (
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
