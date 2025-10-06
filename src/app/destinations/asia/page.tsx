
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const asiaDestinations = [
  {
    name: 'India',
    flag: '🇮🇳',
    tagline: 'Land of Ancient Wonders & Spiritual Journeys',
    bestSeason: 'October - March',
    highlights:
      'Taj Mahal, Rajasthan Palaces, Kerala Backwaters, Himalayan Treks',
    natureFocus:
      'Tigers, elephants, diverse ecosystems from deserts to rainforests',
    href: '/destinations/asia/india',
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    tagline: 'Where Tradition Meets Natural Beauty',
    bestSeason: 'March-May (Cherry Blossoms), September-November',
    highlights: 'Mount Fuji, Cherry Blossoms, Hot Springs, Ancient Temples',
    natureFocus: 'Seasonal beauty, mountain landscapes, forest bathing',
    href: '/destinations/asia/japan',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    tagline: 'Tropical Paradise & Cultural Richness',
    bestSeason: 'November - March',
    highlights: 'Phi Phi Islands, Chiang Mai Mountains, Bangkok Temples',
    natureFocus: 'Tropical rainforests, coral reefs, exotic wildlife',
    href: '/destinations/asia/thailand',
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    tagline: 'Roof of the World Adventures',
    bestSeason: 'September-November, March-May',
    highlights: 'Everest Region, Annapurna Circuit, Kathmandu Valley',
    natureFocus: 'Himalayan peaks, diverse flora/fauna, alpine landscapes',
    href: '/destinations/asia/nepal',
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    tagline: 'Pearl of the Indian Ocean',
    bestSeason: 'December - March (West/South), May - September (East/North)',
    highlights: 'Tea Plantations, Ancient Cities, Wildlife Parks, Beaches',
    natureFocus: 'Leopards, elephants, tropical rainforests, coastal beauty',
    href: '/destinations/asia/sri-lanka',
  },
  {
    name: 'Indonesia',
    flag: '🇮🇩',
    tagline: '17,000 Islands of Wonder',
    bestSeason: 'April - October',
    highlights:
      'Bali, Komodo Dragons, Orangutans in Borneo, Volcanic Landscapes',
    natureFocus: 'Marine biodiversity, tropical rainforests, unique wildlife',
    href: '/destinations/asia/indonesia',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    tagline: 'Garden City State',
    bestSeason: 'Year-round (Tropical Climate)',
    highlights: 'Gardens by the Bay, Sentosa Island, Urban Nature Parks',
    natureFocus: 'Urban biodiversity, tropical gardens, sustainable city planning',
    href: '/destinations/asia/singapore',
  },
  {
    name: 'Vietnam',
    flag: '🇻🇳',
    tagline: 'Timeless Charm & Natural Beauty',
    bestSeason: 'March - April, September - November',
    highlights: 'Ha Long Bay, Hoi An Ancient Town, Mekong Delta',
    natureFocus: 'Karst landscapes, lush rice paddies, diverse ecosystems',
    href: '#',
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    tagline: 'Dynamic Culture & Scenic Landscapes',
    bestSeason: 'March - May, September - November',
    highlights: 'Jeju Island, Seoraksan National Park, Gyeongju',
    natureFocus: 'Volcanic islands, dramatic mountains, coastal scenery',
    href: '#',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    tagline: 'A Fusion of Cultures & Rainforests',
    bestSeason: 'March - October (West Coast), April - September (East Coast)',
    highlights: 'Borneo Rainforest, Cameron Highlands, Langkawi',
    natureFocus: 'Orangutans, ancient rainforests, world-class diving',
    href: '#',
  },
  {
    name: 'Philippines',
    flag: '🇵🇭',
    tagline: 'Archipelago of Natural Wonders',
    bestSeason: 'November - April',
    highlights: 'Palawan, Chocolate Hills of Bohol, Rice Terraces of Banaue',
    natureFocus: 'Pristine beaches, coral reefs, unique geological formations',
    href: '#',
  },
  {
    name: 'Cambodia',
    flag: '🇰🇭',
    tagline: 'Kingdom of Wonder',
    bestSeason: 'November - April',
    highlights: 'Angkor Wat, Koh Rong Islands, Cardamom Mountains',
    natureFocus: 'Ancient temples reclaimed by jungle, rare wildlife',
    href: '#',
  },
];

export default function AsiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Discover Asia&apos;s Natural & Cultural Treasures
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the Himalayas to tropical islands, Asia offers the world&apos;s
            most diverse landscapes and richest cultural heritage.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {asiaDestinations.map((dest) => (
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
