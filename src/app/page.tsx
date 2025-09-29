'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { sampleMediaContent, type MediaContent } from '@/lib/media-data';

const MediaDetails = () => {
  const currentMedia = sampleMediaContent.video;

  return (
    <div className="max-w-4xl mx-auto text-foreground p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline text-center">
        {currentMedia.title}
      </h2>
      <p className="text-base md:text-lg mb-6 text-left">
        {currentMedia.about.overview}
      </p>
      <p className="text-base md:text-lg text-left">
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export default function Home() {
  const [currentMedia] = useState<MediaContent>(sampleMediaContent.video);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      window.scrollTo(0, 0);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background relative">
      <ScrollExpandMedia
        key="video"
        mediaType="video"
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaDetails />
      </ScrollExpandMedia>
    </main>
  );
}
