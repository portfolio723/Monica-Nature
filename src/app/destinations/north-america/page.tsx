import Link from 'next/link';
import { Button } from '@/components/ui/button';

const northAmericaDestinations = [
  {
    name: 'USA',
    flag: '🇺🇸',
    tagline: 'Land of National Parks & Natural Wonders',
    bestSeason: 'Varies by region - April-October generally best',
    highlights: 'Yellowstone, Grand Canyon, Yosemite, Great Smoky Mountains',
    natureFocus: 'Diverse ecosystems, geothermal features, iconic landscapes',
    href: '#',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Wilderness at Its Finest',
    bestSeason: 'June - September',
    highlights: 'Banff, Jasper, Canadian Rockies, Niagara Falls',
    natureFocus: 'Mountain wilderness, pristine lakes, diverse wildlife',
    href: '#',
  },
  {
    name: 'Costa Rica',
    flag: '🇨🇷',
    tagline: 'Pura Vida & Biodiversity',
    bestSeason: 'December - April (Dry), May - November (Green)',
    highlights: 'Manuel Antonio, Arenal Volcano, Monteverde Cloud Forest',
    natureFocus: 'Incredible biodiversity, rainforests, wildlife',
    href: '#',
  },
  {
    name: 'Mexico',
    flag: '🇲🇽',
    tagline: 'Ancient Cultures & Natural Beauty',
    bestSeason: 'November - April',
    highlights: 'Yucatan Cenotes, Copper Canyon, Baja California',
    natureFocus: 'Desert landscapes, marine life, cultural heritage',
    href: '#',
  },
  {
    name: 'Guatemala',
    flag: '🇬🇹',
    tagline: 'Heart of the Maya World',
    bestSeason: 'November - April',
    highlights: 'Tikal National Park, Lake Atitlan, Antigua',
    natureFocus: 'Ancient rainforests, volcanic landscapes, Maya heritage',
    href: '#',
  },
  {
    name: 'Panama',
    flag: '🇵🇦',
    tagline: 'Bridge Between Continents',
    bestSeason: 'December - April',
    highlights: 'Boquete, San Blas Islands, Darien National Park',
    natureFocus: 'Biodiverse rainforests, pristine beaches, bird watching',
    href: '#',
  },
  {
    name: 'Cuba',
    flag: '🇨🇺',
    tagline: 'Caribbean Time Capsule',
    bestSeason: 'November - April',
    highlights: 'Havana, Trinidad, Vinales Valley, Varadero',
    natureFocus: 'Tobacco valleys, coral reefs, colonial architecture',
    href: '#',
  },
];

export default function NorthAmericaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">North America's Untamed Wilderness</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">From vast national parks to pristine coastlines, experience the continent's diverse ecosystems and natural wonders.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {northAmericaDestinations.map((dest) => (
            <div key={dest.name} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{dest.flag} {dest.name}</h2>
              <p className="text-sm font-semibold text-primary mb-2">{dest.tagline}</p>
              <p className="text-xs text-muted-foreground mb-4"><strong>Best Season:</strong> {dest.bestSeason}</p>
              <div className="flex-grow">
                <p className="mb-2"><strong>Highlights:</strong> {dest.highlights}</p>
                <p><strong>Nature Focus:</strong> {dest.natureFocus}</p>
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
