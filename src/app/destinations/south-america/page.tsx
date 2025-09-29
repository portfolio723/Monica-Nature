import Link from 'next/link';
import { Button } from '@/components/ui/button';

const southAmericaDestinations = [
  {
    name: 'Peru',
    flag: '🇵🇪',
    tagline: 'Land of the Incas',
    bestSeason: 'May - September (Dry season)',
    highlights: 'Machu Picchu, Amazon Rainforest, Sacred Valley, Lima',
    natureFocus: 'Ancient Inca trails, diverse ecosystems, Amazon wildlife',
    href: '#',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    tagline: 'Thin Strip of Wonders',
    bestSeason: 'October - March (Summer)',
    highlights: 'Atacama Desert, Torres del Paine, Easter Island, Chilean Lakes',
    natureFocus: 'Extreme landscapes, Patagonian wilderness',
    href: '#',
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    tagline: 'From Tango to Glaciers',
    bestSeason: 'October - March (Summer for Patagonia)',
    highlights: 'Iguazu Falls, Perito Moreno Glacier, Buenos Aires, Mendoza',
    natureFocus: 'Dramatic glaciers, wine regions, diverse wildlife',
    href: '#',
  },
  {
    name: 'Brazil',
    flag: '🇧🇷',
    tagline: 'Samba, Beaches & Amazon',
    bestSeason: 'April - September (Dry season for Amazon)',
    highlights: 'Rio de Janeiro, Amazon Rainforest, Iguazu Falls, Pantanal',
    natureFocus: "World's largest rainforest, diverse wildlife, pristine beaches",
    href: '#',
  },
  {
    name: 'Ecuador',
    flag: '🇪🇨',
    tagline: 'Small Country, Big Adventures',
    bestSeason: 'June - September',
    highlights: 'Galapagos Islands, Amazon Rainforest, Andes Mountains, Quito',
    natureFocus: 'Unique evolution, endemic species, diverse ecosystems',
    href: '#',
  },
  {
    name: 'Bolivia',
    flag: '🇧🇴',
    tagline: 'Heart of South America',
    bestSeason: 'May - October',
    highlights: 'Salar de Uyuni, La Paz, Lake Titicaca, Amazon Basin',
    natureFocus: 'Salt flats, high-altitude landscapes, indigenous culture',
    href: '#',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    tagline: 'The Only Risk is Wanting to Stay',
    bestSeason: 'December - March, July - August',
    highlights: 'Cartagena, Coffee Triangle, Lost City, Caribbean Coast',
    natureFocus: 'Tropical rainforests, coffee landscapes, coastal beauty',
    href: '#',
  },
];

export default function SouthAmericaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">South America's Epic Adventures</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">From the Amazon rainforest to Patagonian glaciers, discover the world's most biodiverse continent.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {southAmericaDestinations.map((dest) => (
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
