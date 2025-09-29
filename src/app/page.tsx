'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { Button } from '@/components/ui/button';
import { sampleMediaContent, type MediaContent } from '@/lib/media-data';

const MediaDetails = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className="max-w-4xl mx-auto text-foreground">
      <h2 className="text-3xl font-bold mb-6 font-headline">
        {currentMedia.title}
      </h2>
      <p className="text-lg mb-8">{currentMedia.about.overview}</p>
      <p className="text-lg mb-8">{currentMedia.about.conclusion}</p>
    </div>
  );
};

export default function Home() {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const [currentMedia, setCurrentMedia] = useState<MediaContent>(
    sampleMediaContent.video
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      window.scrollTo(0, 0);
    }
    setCurrentMedia(sampleMediaContent[mediaType]);
  }, [mediaType, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={() => setMediaType('video')}
          variant={mediaType === 'video' ? 'secondary' : 'ghost'}
          className={
            mediaType !== 'video'
              ? 'text-white border border-white/30 hover:bg-white/20 hover:text-white'
              : ''
          }
        >
          Video
        </Button>

        <Button
          onClick={() => setMediaType('image')}
          variant={mediaType === 'image' ? 'secondary' : 'ghost'}
          className={
            mediaType !== 'image'
              ? 'text-white border border-white/30 hover:bg-white/20 hover:text-white'
              : ''
          }
        >
          Image
        </Button>
      </div>

      <ScrollExpandMedia
        key={mediaType}
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaDetails mediaType={mediaType} />
      </ScrollExpandMedia>
    </main>
  );
}
