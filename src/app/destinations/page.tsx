
import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

const destinationImages = {
  africa: placeholderImages.find((img) => img.id === 'destination-africa'),
  antarctica: placeholderImages.find(
    (img) => img.id === 'destination-antarctica'
  ),
  asia: placeholderImages.find((img) => img.id === 'destination-asia'),
  europe: placeholderImages.find((img) => img.id === 'destination-europe'),
  australia: placeholderImages.find(
    (img) => img.id === 'destination-australia'
  ),
  southAmerica: placeholderImages.find(
    (img) => img.id === 'destination-south-america'
  ),
  northAmerica: placeholderImages.find(
    (img) => img.id === 'destination-north-america'
  ),
};

const continents = [
  {
    name: 'AFRICA',
    image: destinationImages.africa,
    quote: 'In every walk with nature, one receives far more than they seek',
    cta: 'Discover Wild Africa',
    href: '/destinations/africa',
  },
  {
    name: 'ASIA',
    image: destinationImages.asia,
    quote: 'Adventure awaits where ancient wisdom meets pristine nature',
    cta: 'Explore Mystical Asia',
    href: '/destinations/asia',
  },
  {
    name: 'AUSTRALIA & OCEANIA',
    image: destinationImages.australia,
    quote: 'Witness nature&apos;s artistry in the land down under',
    cta: 'Experience Oceania',
    href: '/destinations/australia',
  },
  {
    name: 'EUROPE',
    image: destinationImages.europe,
    quote: 'Where history and nature intertwine in perfect harmony',
    cta: 'Journey Through Europe',
    href: '/destinations/europe',
  },
  {
    name: 'NORTH AMERICA',
    image: destinationImages.northAmerica,
    quote: 'From ancient forests to desert wonders',
    cta: 'Discover North America',
    href: '/destinations/north-america',
  },
  {
    name: 'SOUTH AMERICA',
    image: destinationImages.southAmerica,
    quote: 'Experience the rhythm of the world&apos;s most diverse continent',
    cta: 'Adventure in South America',
    href: '/destinations/south-america',
  },
  {
    name: 'ANTARCTICA',
    image: destinationImages.antarctica,
    quote: 'Journey to the edge of the world',
    cta: 'Explore Antarctica',
    href: '/destinations/antarctica',
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mb-4">
            Explore Nature&apos;s Wonders Across 7 Continents
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground mb-6">
            From the mystical temples of Asia to the pristine wilderness of
            Antarctica, discover handpicked destinations where adventure meets
            conservation.
          </p>
          <p className="text-lg italic text-muted-foreground mb-8">
            &quot;The world is a book, and those who do not travel read only one
            page.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {continents.map((continent) => (
            <Link key={continent.name} href={continent.href}>
              <div className="group relative block h-80 w-full overflow-hidden rounded-lg shadow-lg">
                {continent.image && (
                  <Image
                    src={continent.image.imageUrl}
                    alt={continent.image.description}
                    fill
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={continent.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{continent.name}</h3>
                  <p className="text-sm text-gray-200 mb-4 italic">
                    &quot;{continent.quote}&quot;
                  </p>
                  <div className="text-base font-semibold text-white group-hover:underline">
                    {continent.cta} &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
