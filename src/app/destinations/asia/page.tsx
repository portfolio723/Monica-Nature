
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const asiaDestinations = [
  {
    name: 'India',
    flag: '🇮🇳',
    tagline: 'Land of Ancient Wonders & Spiritual Journeys',
    bestSeason: 'October - March',
    highlights: 'Taj Mahal, Rajasthan Palaces, Kerala Backwaters, Himalayan Treks',
    natureFocus: 'Tigers, elephants, diverse ecosystems from deserts to rainforests',
    href: '#',
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    tagline: 'Where Tradition Meets Natural Beauty',
    bestSeason: 'March-May (Cherry Blossoms), September-November',
    highlights: 'Mount Fuji, Cherry Blossoms, Hot Springs, Ancient Temples',
    natureFocus: 'Seasonal beauty, mountain landscapes, forest bathing',
    href: '#',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    tagline: 'Tropical Paradise & Cultural Richness',
    bestSeason: 'November - March',
    highlights: 'Phi Phi Islands, Chiang Mai Mountains, Bangkok Temples',
    natureFocus: 'Tropical rainforests, coral reefs, exotic wildlife',
    href: '#',
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    tagline: 'Roof of the World Adventures',
    bestSeason: 'September-November, March-May',
    highlights: 'Everest Region, Annapurna Circuit, Kathmandu Valley',
    natureFocus: 'Himalayan peaks, diverse flora/fauna, alpine landscapes',
    href: '#',
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    tagline: 'Pearl of the Indian Ocean',
    bestSeason: 'December - March (West/South), May - September (East/North)',
    highlights: 'Tea Plantations, Ancient Cities, Wildlife Parks, Beaches',
    natureFocus: 'Leopards, elephants, tropical rainforests, coastal beauty',
    href: '#',
  },
  {
    name: 'Indonesia',
    flag: '🇮🇩',
    tagline: '17,000 Islands of Wonder',
    bestSeason: 'April - October',
    highlights: 'Bali, Komodo Dragons, Orangutans in Borneo, Volcanic Landscapes',
    natureFocus: 'Marine biodiversity, tropical rainforests, unique wildlife',
    href: '#',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    tagline: 'Garden City State',
    bestSeason: 'Year-round (Tropical Climate)',
    highlights: 'Gardens by the Bay, Sentosa Island, Urban Nature Parks',
    natureFocus: 'Urban biodiversity, tropical gardens, sustainable city planning',
    href: '#',
  },
];

export default function AsiaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Discover Asia&apos;s Natural & Cultural Treasures</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">From the Himalayas to tropical islands, Asia offers the world&apos;s most diverse landscapes and richest cultural heritage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {asiaDestinations.map((dest) => (
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
