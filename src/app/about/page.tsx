import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

const aboutImages = {
  hero: placeholderImages.find((img) => img.id === 'about-hero'),
  traveler: placeholderImages.find((img) => img.id === 'about-traveler'),
  vision: placeholderImages.find((img) => img.id === 'about-vision'),
  mission: placeholderImages.find((img) => img.id === 'about-mission'),
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="relative h-[50vh] w-full md:h-[75vh]">
          {aboutImages.hero && (
            <Image
              src={aboutImages.hero.imageUrl}
              alt={aboutImages.hero.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={aboutImages.hero.imageHint}
            />
          )}
        </section>

        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative h-80 w-full sm:h-96 md:h-[600px]">
                {aboutImages.traveler && (
                  <Image
                    src={aboutImages.traveler.imageUrl}
                    alt={aboutImages.traveler.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={aboutImages.traveler.imageHint}
                  />
                )}
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-light italic leading-tight sm:text-3xl md:text-5xl">
                  &quot;Travel isn&apos;t just about the destination,
                  <br />
                  <span className="font-semibold text-gray-500">
                    it&apos;s the person you become.
                  </span>
                  &quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50/50 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                  Our Vision
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg">
                  To inspire and empower individuals to explore the world,
                  embrace new cultures, and connect with nature. We believe that
                  travel is a transformative experience that broadens horizons
                  and fosters personal growth.
                </p>
              </div>
              <div className="relative h-80 w-full sm:h-96 md:h-[600px]">
                {aboutImages.vision && (
                  <Image
                    src={aboutImages.vision.imageUrl}
                    alt={aboutImages.vision.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={aboutImages.vision.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative order-last h-80 w-full md:order-first sm:h-96 md:h-[600px]">
                {aboutImages.mission && (
                  <Image
                    src={aboutImages.mission.imageUrl}
                    alt={aboutImages.mission.description}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={aboutImages.mission.imageHint}
                  />
                )}
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg">
                  To curate unique and authentic travel experiences that go
                  beyond the ordinary. We are committed to sustainable tourism
                  and creating a positive impact on the communities we visit,
                  one journey at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
