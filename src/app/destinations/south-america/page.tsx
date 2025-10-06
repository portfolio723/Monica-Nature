
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const southAmericaDestinations = [
  {
    name: 'Argentina',
    flag: '🇦🇷',
    tagline: 'From Tango to Glaciers',
    bestSeason: 'October - April',
    highlights: 'Iguazu Falls, Perito Moreno Glacier, Buenos Aires, Mendoza wine region',
    natureFocus: 'Dramatic glaciers, Andean peaks, vast pampas, diverse wildlife',
    href: '/destinations/south-america/argentina',
  },
  {
    name: 'Bolivia',
    flag: '🇧🇴',
    tagline: 'Heart of South America',
    bestSeason: 'May - October',
    highlights: 'Salar de Uyuni, La Paz, Lake Titicaca, Amazon Basin',
    natureFocus: 'World`s largest salt flat, high-altitude landscapes, dense jungle',
    href: '#',
  },
  {
    name: 'Brazil',
    flag: '🇧🇷',
    tagline: 'Samba, Beaches & Amazon',
    bestSeason: 'Varies by region; April - October for most areas',
    highlights: 'Rio de Janeiro, Amazon Rainforest, Iguazu Falls, Pantanal wetlands',
    natureFocus: 'World`s largest rainforest, incredible biodiversity, iconic beaches',
    href: '/destinations/south-america/brazil',
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    tagline: 'Thin Strip of Wonders',
    bestSeason: 'October - March',
    highlights: 'Atacama Desert, Torres del Paine National Park, Easter Island, Chilean fjords',
    natureFocus: 'Extreme desert landscapes, Patagonian wilderness, volcanic islands',
    href: '#',
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    tagline: 'The Only Risk is Wanting to Stay',
    bestSeason: 'December - March, July - August',
    highlights: 'Cartagena, Coffee Triangle (Eje Cafetero), Tayrona National Park, Lost City trek',
    natureFocus: 'Lush coffee plantations, Caribbean coastlines, Andean cloud forests',
    href: '#',
  },
  {
    name: 'Ecuador',
    flag: '🇪🇨',
    tagline: 'Small Country, Big Adventures',
    bestSeason: 'June - September (Highlands), December - May (Coast/Galapagos)',
    highlights: 'Galapagos Islands, Amazon Rainforest, Avenue of the Volcanoes, Cotopaxi',
    natureFocus: 'Unique evolutionary wildlife, pristine Amazon, high-altitude volcanoes',
    href: '#',
  },
  {
    name: 'Guyana',
    flag: '🇬🇾',
    tagline: 'Land of Giants',
    bestSeason: 'February - April, August - October',
    highlights: 'Kaieteur Falls, Iwokrama Rainforest, giant river otters and anteaters',
    natureFocus: 'Pristine, untouched rainforest, immense waterfalls, unique wildlife',
    href: '#',
  },
  {
    name: 'Paraguay',
    flag: '🇵🇾',
    tagline: 'The Hidden Heart of South America',
    bestSeason: 'May - September',
    highlights: 'Jesuit Missions, Gran Chaco wilderness, Iguazu`s neighbor Monday Falls',
    natureFocus: 'Vast Chaco wilderness, wetlands, unique birdlife',
    href: '#',
  },
  {
    name: 'Peru',
    flag: '🇵🇪',
    tagline: 'Land of the Incas',
    bestSeason: 'May - September',
    highlights: 'Machu Picchu, Amazon Rainforest, Sacred Valley, Nazca Lines',
    natureFocus: 'Ancient Inca trails, diverse Amazonian wildlife, Andean peaks',
    href: '/destinations/south-america/peru',
  },
  {
    name: 'Suriname',
    flag: '🇸🇷',
    tagline: 'A Dutch Twist on the Amazon',
    bestSeason: 'February - April, August - November',
    highlights: 'Central Suriname Nature Reserve (UNESCO), historic Paramaribo, sea turtle nesting sites',
    natureFocus: 'Dense, unspoiled Amazon rainforest, river systems, rich biodiversity',
    href: '#',
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    tagline: 'Tranquil Charm and Rolling Plains',
    bestSeason: 'December - March',
    highlights: 'Colonia del Sacramento, Punta del Este beaches, vast grasslands (pampas)',
    natureFocus: 'Coastal lagoons, rolling plains, relaxed beach towns',
    href: '#',
  },
  {
    name: 'Venezuela',
    flag: '🇻🇪',
    tagline: 'Land of Angel Falls',
    bestSeason: 'December - April',
    highlights: 'Angel Falls (world`s tallest), Mount Roraima, Los Roques archipelago',
    natureFocus: 'Towering tepuis (table-top mountains), vast national parks, Caribbean reefs',
    href: '#',
  },
];

export default function SouthAmericaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">South America&apos;s Epic Adventures</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">From the Amazon rainforest to Patagonian glaciers, discover the world&apos;s most biodiverse continent.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {southAmericaDestinations.map((dest) => (
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
