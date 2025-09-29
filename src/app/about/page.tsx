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
        <section className="relative h-[75vh] w-full">
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

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="relative h-96 w-full md:h-[550px]">
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
                <p className="text-3xl font-light italic leading-tight md:text-5xl">
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

        <section className="bg-gray-50/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="text-left">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  To inspire and empower individuals to explore the world,
                  embrace new cultures, and connect with nature. We believe that
                  travel is a transformative experience that broadens horizons
                  and fosters personal growth.
                </p>
              </div>
              <div className="relative h-96 w-full md:h-[550px]">
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

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="relative order-last h-96 w-full md:order-first md:h-[550px]">
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
              <div className="text-left">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
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
