
'use client';
import { Gallery4, Gallery4Props } from "@/components/ui/gallery4";

const blogData: Gallery4Props = {
  title: "From Our Journal",
  description: "Stories, insights, and tips from our adventures in the wild.",
  items: [
    {
      id: "wildlife-encounters",
      title: "Top 10 Ethical Wildlife Encounters Around the World",
      description: "Discover breathtaking wildlife experiences that prioritize animal welfare and conservation.",
      href: "#",
      image: "https://images.unsplash.com/photo-1667504319000-8133f9021cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxSd2FuZGElMjBnb3JpbGxhfGVufDB8fHx8MTc1OTIxMDgzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "patagonia-hiking",
      title: "A Hiker's Guide to Patagonia: Trails, Tips, and Essential Gear",
      description: "Patagonia is a hiker's paradise. Our guide covers everything you need for the adventure of a lifetime.",
      href: "#",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoaWtpbmd8ZW58MHx8fHwxNzU5NTE2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "costa-rica-cloud-forest",
      title: "The Magic of the Monteverde Cloud Forest in Costa Rica",
      description: "Step into a world shrouded in mist and explore the incredible biodiversity of Monteverde.",
      href: "#",
      image: "https://images.unsplash.com/photo-1710028267890-b63a84536044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2xvdWQlMjBmb3Jlc3R8ZW58MHx8fHwxNzU5MjExMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "packing-light",
      title: "Packing Light for Big Adventures: A Minimalist's Guide",
      description: "Learn how to pack a single carry-on for a multi-week adventure trip without sacrificing the essentials.",
      href: "#",
      image: "https://images.unsplash.com/photo-1575844264771-892081089af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0cmF2ZWwlMjBiYWNrcGFja3xlbnwwfHx8fDE3NTkwNzI4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "great-barrier-reef",
      title: "Beneath the Waves: Exploring the Great Barrier Reef",
      description: "Experience the wonders of the Great Barrier Reef through sustainable tourism operators.",
      href: "#",
      image: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "northern-lights-iceland",
      title: "Chasing the Aurora: A Guide to the Northern Lights in Iceland",
      description: "Our guide covers the best time to go, where to stay, and photography tips to capture the magic.",
      href: "#",
      image: "https://images.unsplash.com/photo-1579201157678-a242a244b34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxOb3J0aGVybiUyMExpZ2h0c3xlbnwwfHx8fDE3NTkyMTA4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Gallery4 {...blogData} />
    </div>
  );
}
