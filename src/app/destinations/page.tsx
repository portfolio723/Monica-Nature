
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

const destinationImages = {
  africa: placeholderImages.find((img) => img.id === 'destination-africa'),
  antarctica: placeholderImages.find(
    (img) => img.id === 'destination-antarctica'
  ),
  asia: placeholderImages.find((img) => img.id === 'destination-asia'),
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block h-1 w-12 bg-gray-400"></div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Your Destinations
            </h1>
            <p className="text-lg text-gray-400">
              Pick a place to fun and enjoy with your loved ones!!!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden">
            {destinationImages.africa && (
              <Image
                src={destinationImages.africa.imageUrl}
                alt={destinationImages.africa.description}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={destinationImages.africa.imageHint}
              />
            )}
            <div className="absolute top-4 -right-10 bg-gray-700/80 px-12 py-2 [transform:rotate(15deg)]">
              <h3 className="text-lg font-semibold [transform:rotate(-15deg)]">
                AFRICA
              </h3>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            {destinationImages.antarctica && (
              <Image
                src={destinationImages.antarctica.imageUrl}
                alt={destinationImages.antarctica.description}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={destinationImages.antarctica.imageHint}
              />
            )}
            <div className="absolute top-4 -right-12 bg-gray-700/80 px-12 py-2 [transform:rotate(15deg)]">
              <h3 className="text-lg font-semibold [transform:rotate(-15deg)]">
                ANTARTICA
              </h3>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            {destinationImages.asia && (
              <Image
                src={destinationImages.asia.imageUrl}
                alt={destinationImages.asia.description}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={destinationImages.asia.imageHint}
              />
            )}
            <div className="absolute top-4 -right-6 bg-gray-700/80 px-12 py-2 [transform:rotate(15deg)]">
              <h3 className="text-lg font-semibold [transform:rotate(-15deg)]">
                ASIA
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
