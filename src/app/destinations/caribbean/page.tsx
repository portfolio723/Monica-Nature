
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caribbeanDestinations = [
  {
    name: 'Cuba',
    flag: '🇨🇺',
    tagline: 'A Journey Back in Time',
    bestSeason: 'December - May',
    highlights: 'Havana`s architecture, Viñales Valley tobacco fields, Trinidad`s colonial streets',
    natureFocus: 'Pristine coral reefs, lush valleys, unique karst landscapes',
    href: '/destinations/caribbean/cuba',
  },
  {
    name: 'Barbados',
    flag: '🇧🇧',
    tagline: 'The Gem of the Caribbean Sea',
    bestSeason: 'December - April',
    highlights: 'Harrison`s Cave, pink sand beaches, vibrant coral reefs',
    natureFocus: 'Underground caves, tropical gardens, sea turtle nesting sites',
    href: '/destinations/caribbean/barbados',
  },
  {
    name: 'Jamaica',
    flag: '🇯🇲',
    tagline: 'The Heartbeat of the Caribbean',
    bestSeason: 'December - April',
    highlights: 'Blue Mountains, Dunn`s River Falls, vibrant music scene',
    natureFocus: 'Lush mountains, cascading waterfalls, diverse birdlife',
    href: '/destinations/caribbean/jamaica',
  },
  {
    name: 'The Bahamas',
    flag: '🇧🇸',
    tagline: '700 Islands of Paradise',
    bestSeason: 'December - May',
    highlights: 'Swimming with pigs in Exuma, Dean`s Blue Hole, underwater caves',
    natureFocus: 'Crystal-clear turquoise waters, extensive coral reefs, unique marine life',
    href: '#',
  },
  {
    name: 'St. Lucia',
    flag: '🇱🇨',
    tagline: 'The Emerald Isle',
    bestSeason: 'December - April',
    highlights: 'The iconic Pitons, Sulphur Springs, lush rainforests',
    natureFocus: 'Volcanic peaks, geothermal springs, rich biodiversity',
    href: '#',
  },
  {
    name: 'Dominican Republic',
    flag: '🇩🇴',
    tagline: 'Nature`s Playground',
    bestSeason: 'December - March',
    highlights: 'Whale watching in Samaná Bay, 27 Waterfalls of Damajagua, pristine beaches',
    natureFocus: 'Humpback whale breeding grounds, lush national parks, diverse ecosystems',
    href: '#',
  },
];

export default function CaribbeanPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">The Caribbean: Sun, Sea &amp; Soul</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Discover a vibrant mosaic of islands, each with its own unique culture, rhythm, and natural wonders, bathed in turquoise waters.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caribbeanDestinations.map((dest) => (
            <div
              key={dest.name}
              className="flex flex-col rounded-lg bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <h2 className="mb-2 text-2xl font-bold">
                {dest.flag} {dest.name}
              </h2>
              <p className="mb-2 text-sm font-semibold text-primary">
                {dest.tagline}
              </p>
              <p className="mb-4 text-xs text-muted-foreground">
                <strong>Best Season:</strong> {dest.bestSeason}
              </p>
              <div className="flex-grow">
                <p className="mb-2">
                  <strong>Highlights:</strong> {dest.highlights}
                </p>
                <p>
                  <strong>Nature Focus:</strong> {dest.natureFocus}
                </p>
              </div>
              <div className="mt-6">
                <Link href={dest.href} passHref>
                  <Button className="w-full">Explore {dest.name}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
