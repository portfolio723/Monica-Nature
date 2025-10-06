import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

const australiaStates = [
  {
    id: 'nsw',
    name: 'New South Wales',
    image: placeholderImages.find((img) => img.id === 'australia-nsw'),
    tagline: 'Iconic Cities & Stunning Coastlines',
    bestTime: 'September - November, March - May',
    highlights: 'Sydney Opera House & Harbour Bridge, Blue Mountains, Bondi Beach, Byron Bay',
    natureFocus: 'Coastal scenery, ancient forests, wine regions',
    href: '#',
  },
  {
    id: 'vic',
    name: 'Victoria',
    image: placeholderImages.find((img) => img.id === 'australia-vic'),
    tagline: 'Culture, Sports & Dramatic Coastlines',
    bestTime: 'March - May, September - November',
    highlights: 'Melbourne`s vibrant culture, Great Ocean Road, The Grampians, Yarra Valley',
    natureFocus: 'Coastal rock formations, alpine parks, diverse wildlife',
    href: '#',
  },
  {
    id: 'qld',
    name: 'Queensland',
    image: placeholderImages.find((img) => img.id === 'australia-qld'),
    tagline: 'The Sunshine State: Reefs & Rainforests',
    bestTime: 'April - October',
    highlights: 'Great Barrier Reef, Daintree Rainforest, Whitsunday Islands, Fraser Island',
    natureFocus: 'World`s largest coral reef, ancient rainforests, pristine islands',
    href: '#',
  },
  {
    id: 'wa',
    name: 'Western Australia',
    image: placeholderImages.find((img) => img.id === 'australia-wa'),
    tagline: 'Vast Wilderness & Otherworldly Landscapes',
    bestTime: 'September - November (south), April - September (north)',
    highlights: 'Ningaloo Reef, The Kimberley, Margaret River, Rottnest Island (Quokkas)',
    natureFocus: 'Whale sharks, rugged outback, unique rock formations',
    href: '#',
  },
  {
    id: 'sa',
    name: 'South Australia',
    image: placeholderImages.find((img) => img.id === 'australia-sa'),
    tagline: 'Wine, Wildlife & Outback Adventures',
    bestTime: 'March - May, September - November',
    highlights: 'Barossa Valley, Kangaroo Island, Flinders Ranges, Adelaide',
    natureFocus: 'Abundant wildlife, world-class wineries, outback scenery',
    href: '#',
  },
  {
    id: 'tas',
    name: 'Tasmania',
    image: placeholderImages.find((img) => img.id === 'australia-tas'),
    tagline: 'Pristine Wilderness at the Edge of the World',
    bestTime: 'December - February',
    highlights: 'Cradle Mountain, Freycinet National Park (Wineglass Bay), Port Arthur',
    natureFocus: 'Untouched temperate rainforest, unique wildlife (Tasmanian Devil)',
    href: '#',
  },
  {
    id: 'nt',
    name: 'Northern Territory',
    image: placeholderImages.find((img) => img.id === 'australia-nt'),
    tagline: 'The Spiritual Heart of the Outback',
    bestTime: 'May - October',
    highlights: 'Uluru-Kata Tjuta, Kakadu National Park, Litchfield National Park, Darwin',
    natureFocus: 'Indigenous culture, dramatic monoliths, crocodiles & wetlands',
    href: '#',
  },
  {
    id: 'act',
    name: 'Australian Capital Territory',
    image: placeholderImages.find((img) => img.id === 'australia-act'),
    tagline: 'The Nation`s Capital, Bush & Culture',
    bestTime: 'September - November, March - May',
    highlights: 'Canberra`s museums, Lake Burley Griffin, Namadgi National Park',
    natureFocus: 'Bush capital, native wildlife, nearby alpine peaks',
    href: '#',
  },
];

export default function AustraliaCountryPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Australia: A Continent of Wonders
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From the underwater wonders of the Great Barrier Reef to the spiritual heart of the outback, Australia is a continent of staggering scale and diversity. Explore its states and territories.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {australiaStates.map((location) => (
            <div
              key={location.id}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full">
                {location.image && (
                  <Image
                    src={location.image.imageUrl}
                    alt={location.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={location.image.imageHint}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{location.name}</h3>
                <p className="mb-1 text-sm font-semibold text-primary">
                  {location.tagline}
                </p>
                <div className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <p>
                    <strong>Best Season:</strong> {location.bestTime}
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Highlights:</strong> {location.highlights}
                  </p>
                  <p>
                    <strong>Nature Focus:</strong> {location.natureFocus}
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <Link href={location.href} passHref>
                    <Button>Explore {location.name}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
