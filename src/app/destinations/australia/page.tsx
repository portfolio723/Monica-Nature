
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const oceaniaDestinations = [
  {
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Land of Unique Wildlife',
    bestSeason: 'March - May, September - November',
    highlights: 'Great Barrier Reef, Uluru, Sydney, Great Ocean Road',
    natureFocus: 'Endemic species, coral reefs, diverse landscapes',
    href: '#',
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Middle Earth Adventures',
    bestSeason: 'October - April',
    highlights: 'Fiordland, Rotorua, Auckland, Queenstown',
    natureFocus: 'Dramatic landscapes, geothermal features, adventure activities',
    href: '#',
  },
  {
    name: 'Fiji',
    flag: '🇫🇯',
    tagline: 'Tropical Paradise',
    bestSeason: 'April - October',
    highlights: 'Coral Coast, Mamanuca Islands, Viti Levu',
    natureFocus: 'Pristine coral reefs, tropical islands, marine life',
    href: '#',
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
    name: 'Tahiti',
    flag: '🇵🇫',
    tagline: 'Islands of Love',
    bestSeason: 'May - October',
    highlights: 'Bora Bora, Moorea, Tahiti, Marquesas Islands',
    natureFocus: 'Lagoons, coral gardens, volcanic landscapes',
    href: '#',
  },
  {
    name: 'Cook Islands',
    flag: '🇨🇰',
    tagline: 'Paradise Found',
    bestSeason: 'April - November',
    highlights: 'Rarotonga, Aitutaki Lagoon, Atiu Caves',
    natureFocus: 'Pristine lagoons, coral reefs, endemic birds',
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
];

export default function AustraliaPage({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Oceania&apos;s Island Paradise & Unique Wildlife</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">Discover the world&apos;s most isolated continent with its endemic species and pristine marine environments.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
