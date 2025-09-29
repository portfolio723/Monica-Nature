import Link from 'next/link';
import { Button } from '@/components/ui/button';

const antarcticaDestinations = [
  {
    name: 'Antarctic Peninsula',
    tagline: 'Gateway to the White Continent',
    bestSeason: 'November - March',
    highlights: 'Deception Island, Lemaire Channel, Port Lockroy',
    natureFocus: 'Penguin colonies, whales, pristine icebergs',
    href: '#',
  },
  {
    name: 'South Georgia Island',
    tagline: 'Serengeti of the Southern Ocean',
    bestSeason: 'November - March',
    highlights: 'King Penguin colonies, Elephant seals, Abandoned whaling stations',
    natureFocus: 'Massive wildlife concentrations, sub-Antarctic landscapes',
    href: '#',
  },
  {
    name: 'Weddell Sea',
    tagline: 'Emperor Penguin Kingdom',
    bestSeason: 'November - January',
    highlights: 'Snow Hill Island, Emperor Penguin colonies',
    natureFocus: 'Emperor penguins, pristine ice formations',
    href: '#',
  },
  {
    name: 'Ross Sea',
    tagline: 'Last Ocean',
    bestSeason: 'December - February',
    highlights: 'McMurdo Station, Ross Ice Shelf, Dry Valleys',
    natureFocus: 'Research stations, unique ecosystems, extreme environments',
    href: '#',
  },
  {
    name: 'Falkland Islands',
    tagline: 'Wildlife Haven in the South Atlantic',
    bestSeason: 'October - March',
    highlights: 'Stanley, Penguin colonies, Elephant seals',
    natureFocus: 'Diverse bird life, marine mammals, rugged landscapes',
    href: '#',
  },
  {
    name: 'Scotia Sea',
    tagline: 'Drake Passage Adventure',
    bestSeason: 'November - March',
    highlights: 'Crossing the Drake Passage, Seabird watching',
    natureFocus: 'Albatross, petrels, whale migration routes',
    href: '#',
  },
];

export default function AntarcticaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Antarctica: The Last Frontier</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Journey to the world's most pristine wilderness, where penguins rule and glaciers tell ancient stories.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {antarcticaDestinations.map((dest) => (
            <div key={dest.name} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{dest.name}</h2>
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
