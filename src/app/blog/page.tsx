
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'top-10-ethical-wildlife-encounters',
    title: 'Top 10 Ethical Wildlife Encounters Around the World',
    category: 'Wildlife',
    excerpt: 'Discover breathtaking wildlife experiences that prioritize animal welfare and conservation. From gorilla trekking in Rwanda to whale watching in the Azores, here’s how to see animals in their natural habitat, responsibly.',
    author: {
      name: 'Elena Pascual',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704d',
    },
    image: placeholderImages.find((img) => img.id === 'blog-wildlife'),
  },
  {
    slug: 'a-hikers-guide-to-patagonia',
    title: 'A Hiker`s Guide to Patagonia: Trails, Tips, and Essential Gear',
    category: 'Hiking',
    excerpt: 'Patagonia is a hiker`s paradise. Whether you`re tackling the famous W Trek or exploring lesser-known trails, our guide covers everything you need to know for the adventure of a lifetime.',
    author: {
      name: 'Mark Chen',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704e',
    },
    image: placeholderImages.find((img) => img.id === 'blog-hiking-patagonia'),
  },
  {
    slug: 'the-magic-of-the-monteverde-cloud-forest',
    title: 'The Magic of the Monteverde Cloud Forest in Costa Rica',
    category: 'Conservation',
    excerpt: 'Step into a world shrouded in mist. We explore the incredible biodiversity of Monteverde, from the elusive Resplendent Quetzal to the intricate network of hanging bridges that offer a unique canopy perspective.',
    author: {
      name: 'Aisha Khan',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704f',
    },
    image: placeholderImages.find((img) => img.id === 'blog-costa-rica-forest'),
  },
  {
    slug: 'packing-light-for-big-adventures',
    title: 'Packing Light for Big Adventures: A Minimalist`s Guide',
    category: 'Travel Tips',
    excerpt: 'Less is more, especially when you`re on the move. Learn how to pack a single carry-on for a multi-week adventure trip without sacrificing the essentials. Your back will thank you!',
    author: {
      name: 'David Lee',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704a',
    },
    image: placeholderImages.find((img) => img.id === 'blog-packing-light'),
  },
  {
    slug: 'beneath-the-waves-discover-the-great-barrier-reef',
    title: 'Beneath the Waves: A Guide to Responsibly Exploring the Great Barrier Reef',
    category: 'Marine Life',
    excerpt: 'The Great Barrier Reef is a world treasure. Find out how you can experience its wonders through sustainable tourism operators who are dedicated to protecting this fragile ecosystem for future generations.',
    author: {
      name: 'Sophia Dubois',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704b',
    },
    image: placeholderImages.find((img) => img.id === 'blog-barrier-reef'),
  },
  {
    slug: 'chasing-the-aurora-a-guide-to-seeing-the-northern-lights',
    title: 'Chasing the Aurora: A Guide to Seeing the Northern Lights in Iceland',
    category: 'Natural Wonders',
    excerpt: 'Witnessing the Northern Lights is an unforgettable experience. Our guide covers the best time to go, where to stay, and photography tips to help you capture the magic of the aurora borealis.',
    author: {
      name: 'Kenji Tanaka',
      avatar: 'https://i.pravatar.cc/40?u=a042581f4e29026704c',
    },
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
            <div key={post.slug} className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
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
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {post.category}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="ml-3 text-sm font-medium text-muted-foreground">{post.author.name}</p>
                  </div>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
