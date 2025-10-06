
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const asiaDestinations = [
  // Western Asia
  {
    name: 'Turkey',
    flag: '🇹🇷',
    tagline: 'Where East Meets West',
    bestSeason: 'April - May, September - October',
    highlights: 'Istanbul, Cappadocia, Ephesus, Pamukkale',
    natureFocus: 'Unique landscapes, Mediterranean coastlines, historical sites',
    href: '#',
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    tagline: 'Futuristic Cities & Desert Adventures',
    bestSeason: 'November - March',
    highlights: 'Dubai, Abu Dhabi, Desert Safaris, Sheikh Zayed Mosque',
    natureFocus: 'Desert landscapes, coastal areas, modern architecture',
    href: '#',
  },
  {
    name: 'Jordan',
    flag: '🇯🇴',
    tagline: 'Kingdom of Time',
    bestSeason: 'March - May, September - November',
    highlights: 'Petra, Wadi Rum, Dead Sea, Roman ruins of Jerash',
    natureFocus: 'Desert landscapes, unique geology, ancient history',
    href: '#',
  },
  {
    name: 'Israel',
    flag: '🇮🇱',
    tagline: 'Ancient History & Modern Innovation',
    bestSeason: 'March - May, September - November',
    highlights: 'Jerusalem, Tel Aviv, Masada, Galilee',
    natureFocus: 'Diverse landscapes from desert to sea, historical and religious sites',
    href: '#',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    tagline: 'Arabian Peninsula`s Hidden Gem',
    bestSeason: 'October - April',
    highlights: 'Muscat, Wahiba Sands, Jebel Shams, Musandam Fjords',
    natureFocus: 'Wadis, deserts, mountains, and pristine coastline',
    href: '#',
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    tagline: 'The Cradle of Arabia',
    bestSeason: 'November - February',
    highlights: 'Al-Ula, Riyadh, Jeddah, Edge of the World',
    natureFocus: 'Vast deserts, ancient tombs, Red Sea coral reefs',
    href: '#',
  },
  {
    name: 'Georgia',
    flag: '🇬🇪',
    tagline: 'The Balcony of Europe',
    bestSeason: 'May - June, September',
    highlights: 'Tbilisi, Caucasus Mountains, Svaneti, Kakheti wine region',
    natureFocus: 'High mountains, lush valleys, ancient cave cities',
    href: '#',
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    tagline: 'Land of Ancient Monasteries',
    bestSeason: 'May - June, September - October',
    highlights: 'Yerevan, Lake Sevan, Tatev Monastery, Mount Ararat views',
    natureFocus: 'Mountainous landscapes, alpine lakes, dramatic gorges',
    href: '#',
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    tagline: 'Land of Fire',
    bestSeason: 'April - June, September - October',
    highlights: 'Baku, Gobustan rock art, mud volcanoes, Sheki',
    natureFocus: 'Unique geology, Caspian Sea coast, mountain villages',
    href: '#',
  },
  {
    name: 'Cyprus',
    flag: '🇨🇾',
    tagline: 'Mythical Island of Aphrodite',
    bestSeason: 'April - June, September - October',
    highlights: 'Paphos archaeological sites, Troodos Mountains, pristine beaches',
    natureFocus: 'Mediterranean coastline, pine-clad mountains, sea caves',
    href: '#',
  },
  { name: 'Bahrain', flag: '🇧🇭', tagline: 'Island of Pearls', bestSeason: 'November - March', highlights: 'Manama, Bahrain Fort, Al Areen Wildlife Park', natureFocus: 'Archipelago, desert wildlife, ancient history', href: '#' },
  { name: 'Iran', flag: '🇮🇷', tagline: 'Persian Dreams', bestSeason: 'March - May, September - November', highlights: 'Isfahan, Persepolis, Shiraz, Yazd', natureFocus: 'Historic gardens, vast deserts, mountain ranges', href: '#' },
  { name: 'Iraq', flag: '🇮🇶', tagline: 'Cradle of Civilization', bestSeason: 'March - May, October - November', highlights: 'Babylon, Erbil Citadel, Mesopotamian Marshes', natureFocus: 'Ancient rivers, marshlands, archaeological sites', href: '#' },
  { name: 'Kuwait', flag: '🇰🇼', tagline: 'Modern Gulf Metropolis', bestSeason: 'November - March', highlights: 'Kuwait Towers, Grand Mosque, Souq Al-Mubarakiya', natureFocus: 'Urban landscapes, coastal areas, desert parks', href: '#' },
  { name: 'Lebanon', flag: '🇱🇧', tagline: 'Paris of the Middle East', bestSeason: 'April - June, September - November', highlights: 'Beirut, Jeita Grotto, Byblos, Roman ruins of Baalbek', natureFocus: 'Mediterranean coast, snow-capped mountains, cedar forests', href: '#' },
  { name: 'Palestine', flag: '🇵🇸', tagline: 'Land of Holy Sites', bestSeason: 'March - May, September - November', highlights: 'Jericho, Bethlehem, Ramallah, ancient history', natureFocus: 'Historical landscapes, desert oases, rolling hills', href: '#' },
  { name: 'Qatar', flag: '🇶🇦', tagline: 'Where Modernity Meets Tradition', bestSeason: 'November - March', highlights: 'Doha, Museum of Islamic Art, Inland Sea (Khor Al Adaid)', natureFocus: 'Desert dunes, mangroves, unique inland sea', href: '#' },
  { name: 'Syria', flag: '🇸🇾', tagline: 'Ancient Crossroads', bestSeason: 'March - May, September - November', highlights: 'Damascus, Aleppo, Palmyra, Krak des Chevaliers', natureFocus: 'Historic cities, oases, Mediterranean coast', href: '#' },
  { name: 'Yemen', flag: '🇾🇪', tagline: 'Arabia Felix', bestSeason: 'October - April', highlights: 'Sana’a, Socotra Island, Shibam (Manhattan of the Desert)', natureFocus: 'Unique island biodiversity, dramatic mountains, ancient architecture', href: '#' },
  
  // Central Asia
  {
    name: 'Uzbekistan',
    flag: '🇺🇿',
    tagline: 'Heart of the Silk Road',
    bestSeason: 'April - May, September - October',
    highlights: 'Samarkand, Bukhara, Khiva, Tashkent',
    natureFocus: 'Ancient cities, desert landscapes, Silk Road history',
    href: '#',
  },
  {
    name: 'Kazakhstan',
    flag: '🇰🇿',
    tagline: 'Land of the Great Steppe',
    bestSeason: 'April - June, September - October',
    highlights: 'Almaty, Charyn Canyon, Kolsai Lakes, Big Almaty Lake',
    natureFocus: 'Vast steppes, dramatic canyons, alpine lakes',
    href: '#',
  },
  {
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    tagline: 'Switzerland of Central Asia',
    bestSeason: 'July - September',
    highlights: 'Issyk-Kul Lake, Ala Archa National Park, Song Kul Lake',
    natureFocus: 'Pristine mountains, nomadic culture, alpine lakes',
    href: '#',
  },
  {
    name: 'Tajikistan',
    flag: '🇹🇯',
    tagline: 'The Roof of the World',
    bestSeason: 'June - September',
    highlights: 'Pamir Highway, Fann Mountains, Iskanderkul Lake',
    natureFocus: 'High-altitude trekking, dramatic mountain passes',
    href: '#',
  },
  {
    name: 'Turkmenistan',
    flag: '🇹🇲',
    tagline: 'Gateway to Hell',
    bestSeason: 'April - June, September - October',
    highlights: 'Darvaza Gas Crater, Ashgabat, ancient Merv',
    natureFocus: 'Karakum Desert, unique geological phenomena',
    href: '#',
  },

  // South Asia
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
    name: 'Maldives',
    flag: '🇲🇻',
    tagline: 'The Sunny Side of Life',
    bestSeason: 'November - April',
    highlights: 'Overwater bungalows, vibrant coral reefs, pristine beaches',
    natureFocus: 'World-class diving and snorkeling, marine life',
    href: '#',
  },
  {
    name: 'Bhutan',
    flag: '🇧🇹',
    tagline: 'Land of the Thunder Dragon',
    bestSeason: 'March - May, September - November',
    highlights: 'Tiger`s Nest Monastery, Punakha Dzong, Gross National Happiness',
    natureFocus: 'Pristine Himalayan landscapes, unique culture',
    href: '#',
},
{
    name: 'Pakistan',
    flag: '🇵🇰',
    tagline: 'The Land of Majestic Peaks',
    bestSeason: 'May - October',
    highlights: 'K2 Base Camp, Hunza Valley, Fairy Meadows, Badshahi Mosque',
    natureFocus: 'Some of the world`s highest mountains, glaciers, alpine valleys',
    href: '#',
},
{ name: 'Afghanistan', flag: '🇦🇫', tagline: 'At the Crossroads of Empires', bestSeason: 'April - May, September - October', highlights: 'Band-e-Amir National Park, Wakhan Corridor, Minaret of Jam', natureFocus: 'Dramatic mountain ranges, high-altitude lakes', href: '#' },
{ name: 'Bangladesh', flag: '🇧🇩', tagline: 'Land of Rivers', bestSeason: 'October - March', highlights: 'Sundarbans mangrove forest, river cruises, tea gardens of Srimangal', natureFocus: 'World`s largest mangrove forest, Bengal tigers, river deltas', href: '#' },
  // Southeast Asia
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
  { name: 'Laos', flag: '🇱🇦', tagline: 'The Land of a Million Elephants', bestSeason: 'October - April', highlights: 'Luang Prabang, Kuang Si Falls, Vang Vieng', natureFocus: 'Limestone mountains, Mekong River life, waterfalls', href: '#' },
  { name: 'Myanmar (Burma)', flag: '🇲🇲', tagline: 'The Golden Land', bestSeason: 'November - February', highlights: 'Bagan, Inle Lake, Shwedagon Pagoda', natureFocus: 'Ancient temples, unique lake ecosystems, traditional life', href: '#' },
  { name: 'Brunei', flag: '🇧🇳', tagline: 'The Abode of Peace', bestSeason: 'January - May', highlights: 'Ulu Temburong National Park, Omar Ali Saifuddien Mosque', natureFocus: 'Pristine rainforest, proboscis monkeys, canopy walks', href: '#' },
  { name: 'East Timor (Timor-Leste)', flag: '🇹🇱', tagline: 'Emerging Paradise', bestSeason: 'May - November', highlights: 'Atauro Island diving, Cristo Rei statue, rugged mountains', natureFocus: 'World-class coral reefs, mountainous interior', href: '#' },

  // East Asia
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
    name: 'South Korea',
    flag: '🇰🇷',
    tagline: 'Dynamic Culture & Scenic Landscapes',
    bestSeason: 'March - May, September - November',
    highlights: 'Jeju Island, Seoraksan National Park, Gyeongju',
    natureFocus: 'Volcanic islands, dramatic mountains, coastal scenery',
    href: '#',
  },
  {
    name: 'China',
    flag: '🇨🇳',
    tagline: 'Land of Dragons and Diversity',
    bestSeason: 'April - May, September - October',
    highlights: 'Great Wall, Zhangjiajie National Park, Li River, Giant Pandas',
    natureFocus: 'Karst landscapes, giant pandas, diverse ecosystems',
    href: '#',
  },
  {
    name: 'Mongolia',
    flag: '🇲🇳',
    tagline: 'Land of the Eternal Blue Sky',
    bestSeason: 'June - August',
    highlights: 'Gobi Desert, Eagle Hunters, Naadam Festival, nomadic life',
    natureFocus: 'Vast steppes, desert landscapes, nomadic culture',
    href: '#',
  },
  { name: 'Taiwan', flag: '🇹🇼', tagline: 'The Heart of Asia', bestSeason: 'October - March', highlights: 'Taroko Gorge, Sun Moon Lake, Alishan National Scenic Area', natureFocus: 'Marble canyons, high mountains, lush forests', href: '#' },
  { name: 'North Korea', flag: '🇰🇵', tagline: 'A Glimpse into the Hermit Kingdom', bestSeason: 'April - June, September - October', highlights: 'Pyongyang, DMZ, Mount Paektu', natureFocus: 'Mountainous terrain, socialist architecture', href: '#' },

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
