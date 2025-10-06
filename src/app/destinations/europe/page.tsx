
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const europeDestinations = [
  // Northern Europe
  { name: 'Denmark', flag: '🇩🇰', tagline: 'Land of Hygge & Fairy Tales', bestSeason: 'June - August', highlights: 'Copenhagen, Tivoli Gardens, Viking Ship Museum', natureFocus: 'Coastal landscapes, rolling hills, historic sites', href: '#' },
  { name: 'Estonia', flag: '🇪🇪', tagline: 'Digital Nation with a Medieval Heart', bestSeason: 'June - August', highlights: 'Tallinn`s Old Town, Lahemaa National Park, Soomaa bogs', natureFocus: 'Bogs, forests, coastline, medieval architecture', href: '#' },
  { name: 'Finland', flag: '🇫🇮', tagline: 'Land of a Thousand Lakes & Northern Lights', bestSeason: 'June - August (Summer), December - March (Winter)', highlights: 'Lapland, Santa Claus Village, Lakeland, Helsinki', natureFocus: 'Lakes, forests, Aurora Borealis, unique archipelago', href: '#' },
  {
    name: 'Iceland',
    flag: '🇮🇸',
    tagline: 'Land of Fire & Ice',
    bestSeason: 'June - August (Summer), September - March (Northern Lights)',
    highlights: 'Blue Lagoon, Golden Circle, Jokulsarlon Glacier Lagoon',
    natureFocus: 'Geothermal features, glaciers, volcanic landscapes',
    href: '/destinations/europe/iceland',
  },
  { name: 'Ireland', flag: '🇮🇪', tagline: 'The Emerald Isle', bestSeason: 'May - September', highlights: 'Cliffs of Moher, Ring of Kerry, Dublin, Giant`s Causeway', natureFocus: 'Dramatic coastlines, green landscapes, ancient sites', href: '#' },
  { name: 'Latvia', flag: '🇱🇻', tagline: 'A Blend of Nature & History', bestSeason: 'June - August', highlights: 'Riga`s Art Nouveau district, Gauja National Park, Jurmala beach', natureFocus: 'Dense forests, sandy beaches, river valleys', href: '#' },
  { name: 'Lithuania', flag: '🇱🇹', tagline: 'Land of Amber & Storks', bestSeason: 'June - August', highlights: 'Vilnius Old Town, Curonian Spit, Trakai Island Castle', natureFocus: 'Sand dunes, lakes, dense forests, historical sites', href: '#' },
  {
    name: 'Norway',
    flag: '🇳🇴',
    tagline: 'Land of Fjords & Northern Lights',
    bestSeason: 'June - August (Summer), December - March (Northern Lights)',
    highlights: 'Geirangerfjord, Lofoten Islands, Tromso, Bergen',
    natureFocus: 'Dramatic fjords, arctic wildlife, midnight sun',
    href: '/destinations/europe/norway',
  },
  { name: 'Sweden', flag: '🇸🇪', tagline: 'Scandinavian Style & Wilderness', bestSeason: 'June - August', highlights: 'Stockholm archipelago, Swedish Lapland, Gothenburg', natureFocus: 'Vast forests, numerous lakes, Northern Lights', href: '#' },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Kingdom of History & Natural Beauty',
    bestSeason: 'May - September',
    highlights: 'London, Scottish Highlands, Stonehenge, Lake District',
    natureFocus: 'Rolling hills, dramatic coastlines, national parks',
    href: '/destinations/europe/scotland',
  },

  // Western Europe
  { name: 'Austria', flag: '🇦🇹', tagline: 'Imperial Palaces & Alpine Peaks', bestSeason: 'June - September (Summer), December - March (Winter)', highlights: 'Vienna, Salzburg, Hallstatt, Alpine scenery', natureFocus: 'Alpine landscapes, crystal-clear lakes, historic cities', href: '#' },
  { name: 'Belgium', flag: '🇧🇪', tagline: 'Medieval Towns & Culinary Delights', bestSeason: 'April - September', highlights: 'Bruges, Brussels, Ghent, Ardennes Forest', natureFocus: 'Historic cities, forested hills, North Sea coast', href: '#' },
  { name: 'France', flag: '🇫🇷', tagline: 'Art, Romance, & Diverse Landscapes', bestSeason: 'April - June, September - November', highlights: 'Paris, French Alps, Provence, French Riviera', natureFocus: 'Alpine peaks, lavender fields, dramatic coastlines', href: '#' },
  { name: 'Germany', flag: '🇩🇪', tagline: 'Fairytale Castles & Vibrant Cities', bestSeason: 'May - September', highlights: 'Berlin, Neuschwanstein Castle, Black Forest, Rhine Valley', natureFocus: 'Enchanted forests, river valleys, Alpine foothills', href: '#' },
  { name: 'Liechtenstein', flag: '🇱🇮', tagline: 'Tiny Principality, Big Views', bestSeason: 'June - September', highlights: 'Vaduz Castle, Alpine trails, scenic beauty', natureFocus: 'Mountainous landscapes, hiking trails', href: '#' },
  { name: 'Luxembourg', flag: '🇱🇺', tagline: 'Grand Duchy of Forests & Fortresses', bestSeason: 'May - September', highlights: 'Luxembourg City`s Old Town, Mullerthal Region', natureFocus: 'Forested landscapes, rock formations, river valleys', href: '#' },
  { name: 'Monaco', flag: '🇲🇨', tagline: 'Glamour on the Riviera', bestSeason: 'April - October', highlights: 'Monte Carlo Casino, Prince`s Palace, Oceanographic Museum', natureFocus: 'Mediterranean coastline, exotic gardens', href: '#' },
  { name: 'Netherlands', flag: '🇳🇱', tagline: 'Land of Canals, Tulips, & Windmills', bestSeason: 'April - October', highlights: 'Amsterdam, Keukenhof Gardens, Kinderdijk windmills', natureFocus: 'Flat landscapes, extensive canal systems, flower fields', href: '#' },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    tagline: 'Alpine Paradise',
    bestSeason: 'June - September (Hiking), December - March (Skiing)',
    highlights: 'Matterhorn, Jungfraujoch, Lake Geneva, Rhine Falls',
    natureFocus: 'Alpine ecosystems, pristine lakes, mountain wildlife',
    href: '/destinations/europe/switzerland',
  },

  // Southern Europe
  { name: 'Albania', flag: '🇦🇱', tagline: 'The Hidden Gem of the Balkans', bestSeason: 'May - September', highlights: 'Albanian Riviera, Theth National Park, Berat', natureFocus: 'Pristine beaches, rugged mountains, Ottoman architecture', href: '#' },
  { name: 'Andorra', flag: '🇦🇩', tagline: 'The Pyrenean Principality', bestSeason: 'June - September (Hiking), December - March (Skiing)', highlights: 'Ski resorts, Caldea spa, hiking trails', natureFocus: 'Mountain landscapes, hiking and skiing', href: '#' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦', tagline: 'Where East Meets West', bestSeason: 'May - September', highlights: 'Sarajevo, Mostar`s Stari Most, Kravica Waterfalls', natureFocus: 'Historic cities, river valleys, waterfalls', href: '#' },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    tagline: 'Mediterranean Jewel',
    bestSeason: 'May - September',
    highlights: 'Plitvice Lakes, Dalmatian Coast, Kornati Islands',
    natureFocus: 'Karst landscapes, cascading lakes, marine parks',
    href: '/destinations/europe/croatia',
  },
  { name: 'Greece', flag: '🇬🇷', tagline: 'Cradle of Western Civilization', bestSeason: 'April - October', highlights: 'Athens, Santorini, Mykonos, Meteora monasteries', natureFocus: 'Iconic islands, ancient ruins, mountainous mainland', href: '#' },
  {
    name: 'Italy',
    flag: '🇮🇹',
    tagline: 'Where Art Meets Nature',
    bestSeason: 'April - June, September - October',
    highlights: 'Dolomites, Tuscany, Amalfi Coast, Italian Lakes',
    natureFocus: 'Alpine meadows, Mediterranean landscapes',
    href: '/destinations/europe/italy',
  },
  { name: 'Malta', flag: '🇲🇹', tagline: 'The Fortress Island', bestSeason: 'April - October', highlights: 'Valletta, Blue Lagoon, Mdina, Gozo', natureFocus: 'Historic cities, dramatic cliffs, clear waters', href: '#' },
  { name: 'Montenegro', flag: '🇲🇪', tagline: 'Wild Beauty of the Adriatic', bestSeason: 'May - September', highlights: 'Bay of Kotor, Durmitor National Park, Budva Riviera', natureFocus: 'Fjord-like bay, glacial lakes, rugged mountains', href: '#' },
  { name: 'North Macedonia', flag: '🇲🇰', tagline: 'The Pearl of the Balkans', bestSeason: 'May - September', highlights: 'Lake Ohrid, Skopje, Matka Canyon', natureFocus: 'Ancient lakes, dramatic canyons, rich history', href: '#' },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Atlantic Edge of Europe',
    bestSeason: 'March - October',
    highlights: 'Azores, Madeira, Douro Valley, Algarve Coast',
    natureFocus: 'Volcanic islands, dramatic coastlines, endemic species',
    href: '/destinations/europe/portugal',
  },
  { name: 'San Marino', flag: '🇸🇲', tagline: 'Ancient Republic on a Mountaintop', bestSeason: 'April - October', highlights: 'Three Towers of San Marino, historic center', natureFocus: 'Panoramic views, historic fortress', href: '#' },
  { name: 'Serbia', flag: '🇷🇸', tagline: 'A Crossroads of Cultures', bestSeason: 'May - September', highlights: 'Belgrade, Novi Sad, Tara National Park', natureFocus: 'River gorges, national parks, vibrant city life', href: '#' },
  { name: 'Slovenia', flag: '🇸🇮', tagline: 'Europe in Miniature', bestSeason: 'May - September', highlights: 'Lake Bled, Ljubljana, Triglav National Park, Postojna Cave', natureFocus: 'Alpine scenery, emerald rivers, karst caves', href: '#' },
  { name: 'Spain', flag: '🇪🇸', tagline: 'Fiesta, Siesta, & Stunning Scenery', bestSeason: 'April - October', highlights: 'Barcelona, Madrid, Andalusia, Canary Islands', natureFocus: 'Diverse landscapes from mountains to beaches', href: '#' },
  { name: 'Vatican City', flag: '🇻🇦', tagline: 'The Heart of the Catholic World', bestSeason: 'Year-round', highlights: 'St. Peter`s Basilica, Vatican Museums, Sistine Chapel', natureFocus: 'Art, architecture, religious history', href: '#' },

  // Eastern Europe
  { name: 'Belarus', flag: '🇧🇾', tagline: 'Europe`s Last Wilderness', bestSeason: 'May - September', highlights: 'Minsk, Belovezhskaya Pushcha National Park, Mir Castle', natureFocus: 'Primeval forests, bison herds, historic castles', href: '#' },
  { name: 'Bulgaria', flag: '🇧🇬', tagline: 'Land of Roses & Ancient Treasures', bestSeason: 'June - September', highlights: 'Sofia, Rila Monastery, Seven Rila Lakes, Black Sea coast', natureFocus: 'Mountain ranges, glacial lakes, sandy beaches', href: '#' },
  { name: 'Czech Republic', flag: '🇨🇿', tagline: 'Fairytale Bohemia', bestSeason: 'May - September', highlights: 'Prague, Český Krumlov, Kutná Hora, Bohemian Switzerland', natureFocus: 'Rock formations, historic cities, national parks', href: '#' },
  { name: 'Hungary', flag: '🇭🇺', tagline: 'The Pearl of the Danube', bestSeason: 'May - September', highlights: 'Budapest, Lake Balaton, Hortobágy National Park', natureFocus: 'Thermal baths, vast plains, river landscapes', href: '#' },
  { name: 'Moldova', flag: '🇲🇩', tagline: 'A Land of Wine & Monasteries', bestSeason: 'May - September', highlights: 'Cricova and Mileștii Mici wineries, Orheiul Vechi', natureFocus: 'Rolling hills, wine cellars, cave monasteries', href: '#' },
  { name: 'Poland', flag: '🇵🇱', tagline: 'A Nation Reborn', bestSeason: 'May - September', highlights: 'Kraków, Warsaw, Tatra Mountains, Białowieża Forest', natureFocus: 'Alpine scenery, ancient forests, diverse wildlife', href: '#' },
  { name: 'Romania', flag: '🇷🇴', tagline: 'Land of Dracula & Painted Monasteries', bestSeason: 'May - September', highlights: 'Transylvania, Bran Castle, Painted Monasteries of Bucovina', natureFocus: 'Carpathian Mountains, medieval towns, unique culture', href: '#' },
  { name: 'Russia', flag: '🇷🇺', tagline: 'The Enigmatic Giant', bestSeason: 'May - September', highlights: 'Moscow, St. Petersburg, Lake Baikal, Kamchatka Peninsula', natureFocus: 'Vast landscapes, from tundra to volcanoes', href: '#' },
  { name: 'Slovakia', flag: '🇸🇰', tagline: 'The Heart of Europe', bestSeason: 'May - September', highlights: 'High Tatras, Spiš Castle, Bratislava', natureFocus: 'Mountain scenery, karst landscapes, historic castles', href: '#' },
  { name: 'Ukraine', flag: '🇺🇦', tagline: 'Crossroads of Europe', bestSeason: 'May - September', highlights: 'Kyiv, Lviv, Carpathian Mountains', natureFocus: 'Vast plains, mountain ranges, Black Sea coast', href: '#' },
].sort((a, b) => a.name.localeCompare(b.name));

export default function EuropePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Europe&apos;s Natural Heritage &amp; Cultural Tapestry
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From Nordic fjords to Mediterranean coastlines, discover
            Europe&apos;s pristine national parks and timeless landscapes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {europeDestinations.map((dest) => (
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
