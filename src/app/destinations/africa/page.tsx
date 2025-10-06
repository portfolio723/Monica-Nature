
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const africaDestinations = [
  { name: 'Algeria', flag: '🇩🇿', tagline: 'Gateway to the Sahara', bestSeason: 'March - May, September - November', highlights: 'Tassili n`Ajjer, Algiers Casbah, Roman ruins', natureFocus: 'Vast desert landscapes, prehistoric rock art', href: '#' },
  { name: 'Angola', flag: '🇦🇴', tagline: 'Emerging from the Ashes', bestSeason: 'June - September', highlights: 'Kalandula Falls, Kissama National Park, colonial architecture', natureFocus: 'Diverse wildlife, dramatic waterfalls, coastline', href: '#' },
  { name: 'Benin', flag: '🇧🇯', tagline: 'Cradle of Voodoo', bestSeason: 'November - February', highlights: 'Ouidah, Royal Palaces of Abomey, Ganvie stilt village', natureFocus: 'Voodoo culture, slave trade history, unique wildlife', href: '#' },
  {
    name: 'Botswana',
    flag: '🇧🇼',
    tagline: 'Pristine Wilderness & Luxury Safari',
    bestSeason: 'May - October',
    highlights: 'Okavango Delta, Chobe National Park, Kalahari Desert',
    natureFocus: 'Largest elephant population, pristine wilderness',
    href: '/destinations/africa/botswana',
  },
  { name: 'Burkina Faso', flag: '🇧🇫', tagline: 'Land of Honest Men', bestSeason: 'October - April', highlights: 'Sindou Peaks, Bobo-Dioulasso Grand Mosque, W National Park', natureFocus: 'Unique rock formations, West African wildlife', href: '#' },
  { name: 'Burundi', flag: '🇧🇮', tagline: 'The Heart of Africa', bestSeason: 'June - August', highlights: 'Lake Tanganyika, Karera Falls, Rusizi National Park', natureFocus: 'Great Rift Valley lakes, diverse birdlife', href: '#' },
  { name: 'Cabo Verde', flag: '🇨🇻', tagline: 'Creole Islands of Music', bestSeason: 'November - June', highlights: 'Sal`s beaches, Fogo`s volcano, Santo Antão`s hiking trails', natureFocus: 'Volcanic landscapes, pristine beaches, marine life', href: '#' },
  { name: 'Cameroon', flag: '🇨🇲', tagline: 'Africa in Miniature', bestSeason: 'November - February', highlights: 'Mount Cameroon, Waza National Park, Mandara Mountains', natureFocus: 'Diverse ecosystems from rainforest to savanna', href: '#' },
  { name: 'Central African Republic', flag: '🇨🇫', tagline: 'Untamed Wilderness', bestSeason: 'December - March', highlights: 'Dzanga-Sangha Special Reserve, lowland gorillas, forest elephants', natureFocus: 'Pristine rainforest, unique megafauna', href: '#' },
  { name: 'Chad', flag: '🇹🇩', tagline: 'The Dead Heart of Africa', bestSeason: 'November - January', highlights: 'Ennedi Plateau, Zakouma National Park, Lakes of Ounianga', natureFocus: 'Saharan landscapes, unique rock formations, desert wildlife', href: '#' },
  { name: 'Comoros', flag: '🇰🇲', tagline: 'The Perfumed Islands', bestSeason: 'May - November', highlights: 'Mount Karthala volcano, pristine beaches, marine parks', natureFocus: 'Volcanic islands, coral reefs, ylang-ylang plantations', href: '#' },
  { name: 'Democratic Republic of the Congo', flag: '🇨🇩', tagline: 'Heart of the Congo Basin', bestSeason: 'June - September', highlights: 'Virunga National Park, Kahuzi-Biega National Park, Congo River', natureFocus: 'Mountain and lowland gorillas, active volcanoes', href: '#' },
  { name: 'Republic of the Congo', flag: '🇨🇬', tagline: 'Gorilla Encounters', bestSeason: 'June - September', highlights: 'Odzala-Kokoua National Park, Nouabalé-Ndoki National Park', natureFocus: 'Western lowland gorillas, pristine rainforests', href: '#' },
  { name: 'Côte d’Ivoire', flag: '🇨🇮', tagline: 'The Jewel of West Africa', bestSeason: 'November - March', highlights: 'Basilica of Our Lady of Peace, Tai National Park, coastal towns', natureFocus: 'Pygmy hippos, chimpanzees, vast rainforests', href: '#' },
  { name: 'Djibouti', flag: '🇩🇯', tagline: 'Gateway to the Red Sea', bestSeason: 'November - February', highlights: 'Lake Assal (lowest point in Africa), whale sharks, unique geology', natureFocus: 'Volcanic landscapes, salt lakes, marine biodiversity', href: '#' },
  {
    name: 'Egypt',
    flag: '🇪🇬',
    tagline: 'Ancient Wonders & Red Sea Reefs',
    bestSeason: 'October - April',
    highlights: 'Pyramids of Giza, Nile River cruises, Red Sea coral reefs',
    natureFocus: 'Desert landscapes, vibrant marine ecosystems, oases',
    href: '/destinations/africa/egypt',
  },
  { name: 'Equatorial Guinea', flag: '🇬🇶', tagline: 'Island & Jungle Adventures', bestSeason: 'December - February', highlights: 'Bioko Island, Monte Alen National Park, pristine beaches', natureFocus: 'Sea turtles, primate research, volcanic islands', href: '#' },
  { name: 'Eritrea', flag: '🇪🇷', tagline: 'The Pearl of the Red Sea', bestSeason: 'December - March', highlights: 'Asmara`s modernist architecture, Dahlak Archipelago', natureFocus: 'Unspoiled coral reefs, unique architecture', href: '#' },
  { name: 'Eswatini', flag: '🇸🇿', tagline: 'A Royal Experience', bestSeason: 'May - September', highlights: 'Hlane Royal National Park, Mlilwane Wildlife Sanctuary, cultural villages', natureFocus: 'Rhino conservation, diverse wildlife, scenic highlands', href: '#' },
  {
    name: 'Ethiopia',
    flag: '🇪🇹',
    tagline: 'The Roof of Africa',
    bestSeason: 'October - June',
    highlights: 'Simien Mountains, Danakil Depression, source of the Blue Nile',
    natureFocus: 'Endemic wildlife, volcanic landscapes, high-altitude plateaus',
    href: '/destinations/africa/ethiopia',
  },
  { name: 'Gabon', flag: '🇬🇦', tagline: 'Africa`s Last Eden', bestSeason: 'June - September', highlights: 'Loango National Park (surfing hippos), Lopé National Park', natureFocus: 'Pristine rainforests, vast national parks, unique wildlife', href: '#' },
  { name: 'Gambia', flag: '🇬🇲', tagline: 'The Smiling Coast of Africa', bestSeason: 'November - May', highlights: 'River Gambia National Park, Kunta Kinteh Island, rich birdlife', natureFocus: 'River ecosystems, diverse birdwatching opportunities', href: '#' },
  { name: 'Ghana', flag: '🇬🇭', tagline: 'Gateway to West Africa', bestSeason: 'November - March', highlights: 'Kakum National Park, Cape Coast Castle, Mole National Park', natureFocus: 'Canopy walks, slave castles, elephants', href: '#' },
  { name: 'Guinea', flag: '🇬🇳', tagline: 'The Water Tower of West Africa', bestSeason: 'November - April', highlights: 'Fouta Djallon highlands, Mount Nimba Strict Nature Reserve', natureFocus: 'Waterfalls, lush highlands, unique biodiversity', href: '#' },
  { name: 'Guinea-Bissau', flag: '🇬🇼', tagline: 'Archipelago of Islands', bestSeason: 'December - April', highlights: 'Bijagós Archipelago (UNESCO Biosphere Reserve), hippos', natureFocus: 'Unique island culture, pristine ecosystems, saltwater hippos', href: '#' },
  {
    name: 'Kenya',
    flag: '🇰🇪',
    tagline: 'Home of the Great Migration',
    bestSeason: 'July - October (Migration), January - March (Calving)',
    highlights: 'Masai Mara, Amboseli, Lake Nakuru, Samburu',
    natureFocus: 'Big Five, Great Migration, diverse ecosystems',
    href: '/destinations/africa/kenya',
  },
  { name: 'Lesotho', flag: '🇱🇸', tagline: 'The Kingdom in the Sky', bestSeason: 'October - April', highlights: 'Maletsunyane Falls, Sehlabathebe National Park, pony trekking', natureFocus: 'High-altitude landscapes, unique flora', href: '#' },
  { name: 'Liberia', flag: '🇱🇷', tagline: 'Land of Liberty', bestSeason: 'December - April', highlights: 'Sapo National Park, surfing at Robertsport', natureFocus: 'Pristine rainforests, pygmy hippos, surf breaks', href: '#' },
  { name: 'Libya', flag: '🇱🇾', tagline: 'Ancient Roman Treasures', bestSeason: 'October - April', highlights: 'Leptis Magna, Sabratha, Ghadames old town', natureFocus: 'Roman ruins, vast desert landscapes', href: '#' },
  {
    name: 'Madagascar',
    flag: '🇲🇬',
    tagline: 'The Eighth Continent',
    bestSeason: 'April - October',
    highlights: 'Avenue of the Baobabs, Andasibe-Mantadia, Isalo National Park',
    natureFocus: 'Unique endemic species, lemurs, diverse ecosystems',
    href: '/destinations/africa/madagascar',
  },
  { name: 'Malawi', flag: '🇲🇼', tagline: 'The Warm Heart of Africa', bestSeason: 'May - October', highlights: 'Lake Malawi National Park, Liwonde National Park, Mount Mulanje', natureFocus: 'Freshwater lake, diverse wildlife, mountain hiking', href: '#' },
  { name: 'Mali', flag: '🇲🇱', tagline: 'Crossroads of the Sahara', bestSeason: 'November - February', highlights: 'Timbuktu, Great Mosque of Djenné, Dogon Country', natureFocus: 'Unique architecture, desert landscapes, cultural traditions', href: '#' },
  { name: 'Mauritania', flag: '🇲🇷', tagline: 'The Eye of the Sahara', bestSeason: 'November - March', highlights: 'Banc d`Arguin National Park, Richat Structure (Eye of the Sahara)', natureFocus: 'Migratory birds, unique geological formations', href: '#' },
  { name: 'Mauritius', flag: '🇲🇺', tagline: 'Paradise Island', bestSeason: 'May - December', highlights: 'Black River Gorges National Park, Le Morne Brabant, coral reefs', natureFocus: 'Volcanic landscapes, endemic species, lagoons', href: '#' },
  {
    name: 'Morocco',
    flag: '🇲🇦',
    tagline: 'Atlas Mountains & Sahara Dunes',
    bestSeason: 'March - May, September - November',
    highlights: 'High Atlas trekking, Sahara desert camps, vibrant souks',
    natureFocus: 'Mountain ranges, vast deserts, unique Argan forests',
    href: '/destinations/africa/morocco',
  },
  { name: 'Mozambique', flag: '🇲🇿', tagline: 'Pearls of the Indian Ocean', bestSeason: 'May - November', highlights: 'Bazaruto Archipelago, Gorongosa National Park, Quirimbas Islands', natureFocus: 'Marine parks, coral reefs, wildlife restoration', href: '#' },
  {
    name: 'Namibia',
    flag: '🇳🇦',
    tagline: 'Desert Meets Ocean Spectacle',
    bestSeason: 'May - October',
    highlights: 'Sossusvlei Dunes, Etosha National Park, Skeleton Coast',
    natureFocus: 'Desert-adapted wildlife, dramatic landscapes',
    href: '/destinations/africa/namibia',
  },
  { name: 'Niger', flag: '🇳🇪', tagline: 'The Last Caravans', bestSeason: 'October - March', highlights: 'Aïr and Ténéré Natural Reserves, Kouré Giraffe Reserve', natureFocus: 'Saharan wildlife, dinosaur fossils, West African giraffes', href: '#' },
  { name: 'Nigeria', flag: '🇳🇬', tagline: 'The Giant of Africa', bestSeason: 'November - January', highlights: 'Yankari National Park, Zuma Rock, Cross River National Park', natureFocus: 'Diverse wildlife, unique primates, waterfalls', href: '#' },
  {
    name: 'Rwanda',
    flag: '🇷🇼',
    tagline: 'Land of a Thousand Hills',
    bestSeason: 'June - September, December - February',
    highlights: 'Volcanoes National Park, Nyungwe Forest, Lake Kivu',
    natureFocus: 'Mountain gorillas, golden monkeys, rainforest',
    href: '/destinations/africa/rwanda',
  },
  { name: 'São Tomé and Príncipe', flag: '🇸🇹', tagline: 'The Chocolate Islands', bestSeason: 'June - September', highlights: 'Obo Natural Park, pristine beaches, endemic species', natureFocus: 'Volcanic peaks, cloud forests, unique biodiversity', href: '#' },
  { name: 'Senegal', flag: '🇸🇳', tagline: 'The Gateway to Africa', bestSeason: 'November - May', highlights: 'Lake Retba (Pink Lake), Saloum Delta National Park, Île de Gorée', natureFocus: 'Mangrove deltas, bird sanctuaries, unique natural phenomena', href: '#' },
  { name: 'Seychelles', flag: '🇸🇨', tagline: 'An Archipelago of Eden', bestSeason: 'April - May, October - November', highlights: 'Vallée de Mai (Coco de Mer), Anse Source d`Argent beach, Aldabra Atoll', natureFocus: 'Giant tortoises, endemic birds, pristine coral reefs', href: '#' },
  { name: 'Sierra Leone', flag: '🇸🇱', tagline: 'Diamond of West Africa', bestSeason: 'November - April', highlights: 'Tiwai Island Wildlife Sanctuary, pristine beaches of the Freetown Peninsula', natureFocus: 'Pygmy hippos, diverse primate populations', href: '#' },
  { name: 'Somalia', flag: '🇸🇴', tagline: 'Land of Punt', bestSeason: 'December - March', highlights: 'Laas Geel rock art, beautiful coastlines', natureFocus: 'Ancient rock art, coastal scenery, frankincense trees', href: '#' },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    tagline: "Rainbow Nation's Natural Treasures",
    bestSeason: 'May - September',
    highlights: 'Kruger National Park, Cape Town, Garden Route, Winelands',
    natureFocus: 'Big Five, Great White Sharks, diverse landscapes',
    href: '/destinations/africa/south-africa',
  },
  { name: 'South Sudan', flag: '🇸🇸', tagline: 'The Newest Nation', bestSeason: 'December - April', highlights: 'Boma National Park (great migration), the Sudd wetland', natureFocus: 'Massive wildlife migrations, vast wetlands', href: '#' },
  { name: 'Sudan', flag: '🇸🇩', tagline: 'Land of the Black Pharaohs', bestSeason: 'October - April', highlights: 'Meroe Pyramids, Red Sea diving', natureFocus: 'Ancient pyramids, untouched coral reefs', href: '#' },
  {
    name: 'Tanzania',
    flag: '🇹🇿',
    tagline: 'Serengeti & Beyond',
    bestSeason: 'June - October (Dry season)',
    highlights: 'Serengeti, Ngorongoro Crater, Mount Kilimanjaro, Zanzibar',
    natureFocus: "World's largest animal migration, crater wildlife",
    href: '/destinations/africa/tanzania',
  },
  { name: 'Togo', flag: '🇹🇬', tagline: 'Small Country, Big Heart', bestSeason: 'November - February', highlights: 'Koutammakou landscape (UNESCO), Fazao Malfakassa National Park', natureFocus: 'Traditional mud tower-houses, forest elephants', href: '#' },
  { name: 'Tunisia', flag: '🇹🇳', tagline: 'Crossroads of the Mediterranean', bestSeason: 'April - June, September - October', highlights: 'El Djem Amphitheatre, Sahara oases, Carthage ruins', natureFocus: 'Saharan landscapes, Mediterranean coastline', href: '#' },
  { name: 'Uganda', flag: '🇺🇬', tagline: 'The Pearl of Africa', bestSeason: 'June - August, December - February', highlights: 'Bwindi Impenetrable National Park, Murchison Falls, Queen Elizabeth National Park', natureFocus: 'Mountain gorillas, tree-climbing lions, source of the Nile', href: '#' },
  {
    name: 'Zambia',
    flag: '🇿🇲',
    tagline: 'The Real Africa, Land of the Smoke That Thunders',
    bestSeason: 'May - October',
    highlights: 'Victoria Falls, South Luangwa National Park, Lower Zambezi',
    natureFocus: 'Walking safaris, abundant leopards, pristine river ecosystems',
    href: '#',
  },
  {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    tagline: 'A World of Wonders',
    bestSeason: 'May - October',
    highlights: 'Victoria Falls, Hwange National Park, Mana Pools',
    natureFocus: 'Large elephant herds, wild dog populations, diverse birdlife',
    href: '#',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function AfricaPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Africa: Where Wildlife Roams Wild &amp; Free
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Experience the birthplace of humanity through its magnificent
            wildlife, diverse landscapes, and vibrant cultures.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {africaDestinations.map((dest) => (
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
              <div className="flex-grow text-sm">
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
