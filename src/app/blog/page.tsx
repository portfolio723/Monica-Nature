
import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    id: 'wildlife-encounters',
    category: 'Wildlife',
    title: 'Top 10 Ethical Wildlife Encounters Around the World',
    excerpt:
      'Discover breathtaking wildlife experiences that prioritize animal welfare and conservation. From gorilla trekking in Rwanda to whale watching in the Azores, here’s how to see animals in their natural habitat, responsibly.',
    author: 'Elena Pascual',
    image: placeholderImages.find((img) => img.id === 'blog-wildlife'),
  },
  {
    id: 'patagonia-hiking',
    category: 'Hiking',
    title: 'A Hiker`s Guide to Patagonia: Trails, Tips, and Essential Gear',
    excerpt:
      'Patagonia is a hiker`s paradise. Whether you`re tackling the famous W Trek or exploring lesser-known trails, our guide covers everything you need to know for the adventure of a lifetime.',
    author: 'Mark Chen',
    image: placeholderImages.find((img) => img.id === 'blog-hiking-patagonia'),
  },
  {
    id: 'costa-rica-cloud-forest',
    category: 'Conservation',
    title: 'The Magic of the Monteverde Cloud Forest in Costa Rica',
    excerpt:
      'Step into a world shrouded in mist. We explore the incredible biodiversity of Monteverde, from the elusive Resplendent Quetzal to the intricate network of hanging bridges that offer a unique canopy perspective.',
    author: 'Aisha Khan',
    image: placeholderImages.find((img) => img.id === 'blog-costa-rica-forest'),
  },
  {
    id: 'packing-light',
    category: 'Travel Tips',
    title: 'Packing Light for Big Adventures: A Minimalist`s Guide',
    excerpt:
      'Less is more, especially when you`re on the move. Learn how to pack a single carry-on for a multi-week adventure trip without sacrificing the essentials. Your back will thank you!',
    author: 'David Lee',
    image: placeholderImages.find((img) => img.id === 'blog-packing-light'),
  },
  {
    id: 'great-barrier-reef',
    category: 'Marine Life',
    title:
      'Beneath the Waves: A Guide to Responsibly Exploring the Great Barrier Reef',
    excerpt:
      'The Great Barrier Reef is a world treasure. Find out how you can experience its wonders through sustainable tourism operators who are dedicated to protecting this fragile ecosystem for future generations.',
    author: 'Sophia Dubois',
    image: placeholderImages.find((img) => img.id === 'blog-barrier-reef'),
  },
  {
    id: 'northern-lights-iceland',
    category: 'Natural Wonders',
    title: 'Chasing the Aurora: A Guide to Seeing the Northern Lights in Iceland',
    excerpt:
      'Witnessing the Northern Lights is an unforgettable experience. Our guide covers the best time to go, where to stay, and photography tips to help you capture the magic of the aurora borealis.',
    author: 'Kenji Tanaka',
    image: placeholderImages.find((img) => img.id === 'blog-northern-lights'),
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            From Our Journal
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Stories, insights, and tips from our adventures in the wild.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href="#">
              <div className="group flex cursor-pointer flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-56 w-full">
                  {post.image && (
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center">
                    <p className="text-xs text-muted-foreground">
                      By {post.author}
                    </p>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                    Read More &rarr;
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
