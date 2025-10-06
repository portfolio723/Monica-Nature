

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const mainlandNorthAmericaDestinations = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Wilderness at Its Finest',
    bestSeason: 'June - September',
    highlights: 'Banff, Jasper, Canadian Rockies, Niagara Falls',
    natureFocus: 'Mountain wilderness, pristine lakes, diverse wildlife',
    href: '/destinations/north-america/canada',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'Land of National Parks & Natural Wonders',
    bestSeason: 'Varies by region - April-October generally best',
    highlights: 'Yellowstone, Grand Canyon, Yosemite, Great Smoky Mountains',
    natureFocus: 'Diverse ecosystems, geothermal features, iconic landscapes',
    href: '/destinations/north-america/usa',
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
];

const centralAmericaDestinations = [
  {
    name: 'Belize',
    flag: '🇧🇿',
    tagline: 'A Caribbean Jewel in Central America',
    bestSeason: 'December - May',
    highlights: 'Great Blue Hole, Barrier Reef, Maya Ruins (Caracol, Xunantunich)',
    natureFocus: 'World-class diving, pristine reef, jungle wildlife',
    href: '#',
  },
  {
    name: 'Costa Rica',
    flag: '🇨🇷',
    tagline: 'Pura Vida & Biodiversity',
    bestSeason: 'December - April (Dry), May - November (Green)',
    highlights: 'Manuel Antonio, Arenal Volcano, Monteverde Cloud Forest',
    natureFocus: 'Incredible biodiversity, rainforests, wildlife',
    href: '/destinations/north-america/costa-rica',
  },
  {
    name: 'El Salvador',
    flag: '🇸🇻',
    tagline: 'Land of Volcanoes and Surf',
    bestSeason: 'November - April',
    highlights: 'Ruta de las Flores, Santa Ana Volcano, surf spots (El Tunco)',
    natureFocus: 'Volcanic hikes, crater lakes, Pacific coastline',
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
    name: 'Honduras',
    flag: '🇭🇳',
    tagline: 'Coral Reefs & Ancient Ruins',
    bestSeason: 'December - April',
    highlights: 'Bay Islands (Roatán), Copán Ruins, Pico Bonito National Park',
    natureFocus: 'Pristine diving, Mayan archaeology, lush rainforests',
    href: '#',
  },
  {
    name: 'Nicaragua',
    flag: '🇳🇮',
    tagline: 'Land of Lakes and Volcanoes',
    bestSeason: 'November - May',
    highlights: 'Ometepe Island, Granada, volcano boarding on Cerro Negro',
    natureFocus: 'Twin-volcano island, colonial cities, active volcanoes',
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
];

interface Destination {
  name: string;
  flag: string;
  tagline: string;
  bestSeason: string;
  highlights: string;
  natureFocus: string;
  href: string;
}

const DestinationCard = ({ dest }: { dest: Destination }) => (
  <div
    key={dest.name}
    className="flex flex-col rounded-lg bg-card p-6 shadow-md transition-shadow hover:shadow-xl"
  >
    <h2 className="mb-2 text-2xl font-bold">
      {dest.flag} {dest.name}
    </h2>
    <p className="mb-2 text-sm font-semibold text-primary">{dest.tagline}</p>
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
);

export default function NorthAmericaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            North America&apos;s Untamed Wilderness
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From vast national parks to pristine coastlines, experience the
            continent&apos;s diverse ecosystems and natural wonders.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
            Mainland North America
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainlandNorthAmericaDestinations.map((dest) => (
              <DestinationCard key={dest.name} dest={dest} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
            Central America
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {centralAmericaDestinations.map((dest) => (
              <DestinationCard key={dest.name} dest={dest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
