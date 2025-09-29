import { placeholderImages } from '@/lib/placeholder-images';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

export interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const getImage = (id: string) => placeholderImages.find(img => img.id === id)?.imageUrl || '';

export const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://www.youtube.com/watch?v=1La4QzGeaaQ', // "A Flight Through the Orion Nebula"
    poster: getImage('video-poster'),
    background: getImage('cosmic-background'),
    title: 'From Nature to Breathtaking',
    date: 'Cosmic Journey',
    scrollToExpand: 'Scroll to Expand',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
      conclusion:
        'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
    },
  },
};
