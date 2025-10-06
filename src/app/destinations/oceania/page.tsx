
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const oceaniaDestinations = [
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Middle Earth Adventures',
    bestSeason: 'October - April',
    highlights: 'Fiordland, Rotorua, Auckland, Queenstown',
    natureFocus: 'Dramatic landscapes, geothermal features, adventure activities',
    href: '/destinations/oceania/new-zealand',
  },
  {
    name: 'Fiji',
    flag: '🇫🇯',
    tagline: 'Tropical Paradise',
    bestSeason: 'April - October',
    highlights: 'Coral Coast, Mamanuca Islands, Viti Levu',
    natureFocus: 'Pristine coral reefs, tropical islands, marine life',
    href: '/destinations/oceania/fiji',
  },
  {
    name: 'Papua New Guinea',
    flag: '🇵🇬',
    tagline: 'Land of Unexpected',
    bestSeason: 'May - October',
    highlights: 'Kokoda Trail, Rabaul, Sepik River, Mount Wilhelm',
    natureFocus: 'Tropical rainforests, unique wildlife, cultural diversity',
    href: '#',
  },
  {
    name: 'Solomon Islands',
    flag: '🇸🇧',
    tagline: 'Wrecks to Reefs',
    bestSeason: 'May - November',
    highlights: 'WWII wreck diving, volcanic islands, traditional villages',
    natureFocus: 'Pristine coral reefs, volcanic landscapes, rich history',
    href: '#',
  },
  {
    name: 'Vanuatu',
    flag: '🇻🇺',
    tagline: 'Volcanic Islands Adventure',
    bestSeason: 'April - October',
    highlights: 'Mount Yasur Volcano, Port Vila, Espiritu Santo',
    natureFocus: 'Active volcanoes, pristine diving, cultural experiences',
    href: '#',
  },
  {
    name: 'Samoa',
    flag: '🇼🇸',
    tagline: 'The Treasured Islands',
    bestSeason: 'May - October',
    highlights: 'To Sua Ocean Trench, pristine beaches, lava fields',
    natureFocus: 'Lush rainforests, powerful blowholes, cascading waterfalls',
    href: '#',
  },
  {
    name: 'Tonga',
    flag: '🇹🇴',
    tagline: 'The True South Pacific',
    bestSeason: 'May - October',
    highlights: 'Swimming with humpback whales, ancient archaeological sites',
    natureFocus: 'Whale nurseries, coral atolls, limestone caves',
    href: '#',
  },
  {
    name: 'Tuvalu',
    flag: '🇹🇻',
    tagline: 'The Disappearing Nation',
    bestSeason: 'May - October',
    highlights: 'Funafuti Conservation Area, laid-back island life',
    natureFocus: 'Pristine coral atolls, marine conservation, unique ecosystem',
    href: '#',
  },
  {
    name: 'Kiribati',
    flag: '🇰🇮',
    tagline: 'The Crossroads of the Pacific',
    bestSeason: 'April - October',
    highlights: 'World-class fly-fishing, Phoenix Islands Protected Area (UNESCO)',
    natureFocus: 'Vast coral atolls, immense marine protected area, birdlife',
    href: '#',
  },
  {
    name: 'Marshall Islands',
    flag: '🇲🇭',
    tagline: 'Jewels of the Pacific',
    bestSeason: 'December - April',
    highlights: 'Bikini Atoll wreck diving, tranquil outer atolls',
    natureFocus: 'Historic wreck diving, remote coral atolls, marine biodiversity',
    href: '#',
  },
  {
    name: 'Micronesia',
    flag: '🇫🇲',
    tagline: 'Federated States of Wonder',
    bestSeason: 'December - April',
    highlights: 'Nan Madol ancient city, world-class diving in Chuuk Lagoon',
    natureFocus: 'Ancient ruins, manta ray sanctuaries, pristine reefs',
    href: '#',
  },
  {
    name: 'Nauru',
    flag: '🇳🇷',
    tagline: 'Pleasant Island',
    bestSeason: 'March - October',
    highlights: 'Anibare Bay, unique island geology, Command Ridge',
    natureFocus: 'Unique phosphate rock formations, coastal scenery',
    href: '#',
  },
  {
    name: 'Palau',
    flag: '🇵🇼',
    tagline: 'Pristine Paradise',
    bestSeason: 'December - April',
    highlights: 'Jellyfish Lake, Rock Islands, world-class diving',
    natureFocus: 'Unique marine lakes, incredible biodiversity, shark sanctuaries',
    href: '#',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function OceaniaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Oceania&apos;s Island Paradise & Unique Wildlife</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">Discover the world&apos;s most remote and beautiful islands, with pristine marine environments and unique cultures.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {oceaniaDestinations.map((dest) => (
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
