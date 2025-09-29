
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const africaDestinations = [
  {
    name: 'Kenya',
    flag: '🇰🇪',
    tagline: 'Home of the Great Migration',
    bestSeason: 'July - October (Migration), January - March (Calving)',
    highlights: 'Masai Mara, Amboseli, Lake Nakuru, Samburu',
    natureFocus: 'Big Five, Great Migration, diverse ecosystems',
    href: '#',
  },
  {
    name: 'Tanzania',
    flag: '🇹🇿',
    tagline: 'Serengeti & Beyond',
    bestSeason: 'June - October (Dry season)',
    highlights: 'Serengeti, Ngorongoro Crater, Mount Kilimanjaro, Zanzibar',
    natureFocus: "World's largest animal migration, crater wildlife",
    href: '#',
  },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    tagline: "Rainbow Nation's Natural Treasures",
    bestSeason: 'May - September',
    highlights: 'Kruger National Park, Cape Town, Garden Route, Winelands',
    natureFocus: 'Big Five, Great White Sharks, diverse landscapes',
    href: '#',
  },
  {
    name: 'Botswana',
    flag: '🇧🇼',
    tagline: 'Pristine Wilderness & Luxury Safari',
    bestSeason: 'May - October',
    highlights: 'Okavango Delta, Chobe National Park, Kalahari Desert',
    natureFocus: 'Largest elephant population, pristine wilderness',
    href: '#',
  },
  {
    name: 'Namibia',
    flag: '🇳🇦',
    tagline: 'Desert Meets Ocean Spectacle',
    bestSeason: 'May - October',
    highlights: 'Sossusvlei Dunes, Etosha National Park, Skeleton Coast',
    natureFocus: 'Desert-adapted wildlife, dramatic landscapes',
    href: '#',
  },
  {
    name: 'Rwanda',
    flag: '🇷🇼',
    tagline: 'Land of a Thousand Hills',
    bestSeason: 'June - September, December - February',
    highlights: 'Volcanoes National Park, Nyungwe Forest, Lake Kivu',
    natureFocus: 'Mountain gorillas, golden monkeys, rainforest',
    href: '#',
  },
  {
    name: 'Madagascar',
    flag: '🇲🇬',
    tagline: 'The Eighth Continent',
    bestSeason: 'April - October',
    highlights: 'Avenue of the Baobabs, Andasibe-Mantadia, Isalo National Park',
    natureFocus: 'Unique endemic species, lemurs, diverse ecosystems',
    href: '#',
  },
];

export default function AfricaPage({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Africa: Where Wildlife Roams Wild & Free</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">Experience the birthplace of humanity through its magnificent wildlife, diverse landscapes, and vibrant cultures.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {africaDestinations.map((dest) => (
            <div key={dest.name} className="flex flex-col rounded-lg bg-card p-6 shadow-md transition-shadow hover:shadow-xl">
              <h2 className="mb-2 text-2xl font-bold">{dest.flag} {dest.name}</h2>
              <p className="mb-2 text-sm font-semibold text-primary">{dest.tagline}</p>
              <p className="mb-4 text-xs text-muted-foreground"><strong>Best Season:</strong> {dest.bestSeason}</p>
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
