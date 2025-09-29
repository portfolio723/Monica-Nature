
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const europeDestinations = [
  {
    name: 'Norway',
    flag: '🇳🇴',
    tagline: 'Land of Fjords & Northern Lights',
    bestSeason: 'June - August (Summer), December - March (Northern Lights)',
    highlights: 'Geirangerfjord, Lofoten Islands, Tromso, Bergen',
    natureFocus: 'Dramatic fjords, arctic wildlife, midnight sun',
    href: '#',
  },
  {
    name: 'Iceland',
    flag: '🇮🇸',
    tagline: 'Land of Fire & Ice',
    bestSeason: 'June - August (Summer), September - March (Northern Lights)',
    highlights: 'Blue Lagoon, Golden Circle, Jokulsarlon Glacier Lagoon',
    natureFocus: 'Geothermal features, glaciers, volcanic landscapes',
    href: '#',
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    tagline: 'Alpine Paradise',
    bestSeason: 'June - September (Hiking), December - March (Skiing)',
    highlights: 'Matterhorn, Jungfraujoch, Lake Geneva, Rhine Falls',
    natureFocus: 'Alpine ecosystems, pristine lakes, mountain wildlife',
    href: '#',
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    tagline: 'Where Art Meets Nature',
    bestSeason: 'April - June, September - October',
    highlights: 'Dolomites, Tuscany, Amalfi Coast, Italian Lakes',
    natureFocus: 'Alpine meadows, Mediterranean landscapes',
    href: '#',
  },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    tagline: 'Mediterranean Jewel',
    bestSeason: 'May - September',
    highlights: 'Plitvice Lakes, Dalmatian Coast, Kornati Islands',
    natureFocus: 'Karst landscapes, cascading lakes, marine parks',
    href: '#',
  },
  {
    name: 'Scotland',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    tagline: 'Highlands & Islands Adventure',
    bestSeason: 'May - September',
    highlights: 'Isle of Skye, Loch Ness, Scottish Highlands, Edinburgh',
    natureFocus: 'Highland landscapes, coastal beauty, wildlife',
    href: '#',
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Atlantic Edge of Europe',
    bestSeason: 'March - October',
    highlights: 'Azores, Madeira, Douro Valley, Algarve Coast',
    natureFocus: 'Volcanic islands, dramatic coastlines, endemic species',
    href: '#',
  },
];

export default function EuropePage({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Europe&apos;s Natural Heritage & Cultural Tapestry</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">From Nordic fjords to Mediterranean coastlines, discover Europe&apos;s pristine national parks and timeless landscapes.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {europeDestinations.map((dest) => (
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
