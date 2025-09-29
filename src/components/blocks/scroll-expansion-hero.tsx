'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollExpandMediaProps {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number>(0);

  const progressRef = useRef(scrollProgress);
  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  const expandedRef = useRef(mediaFullyExpanded);
  useEffect(() => {
    expandedRef.current = mediaFullyExpanded;
  }, [mediaFullyExpanded]);

  useEffect(() => {
    const manageScrollLock = () => {
      const scrollLocked = isLoading || !mediaFullyExpanded;
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.overflow = scrollLocked ? 'hidden' : '';
      }
    };

    manageScrollLock();

    return () => {
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.overflow = '';
      }
    };
  }, [isLoading, mediaFullyExpanded]);

  const handleInteraction = useCallback((delta: number) => {
    if (expandedRef.current) return;

    const newProgress = Math.min(
      Math.max(progressRef.current + delta, 0),
      1
    );
    setScrollProgress(newProgress);

    if (newProgress >= 1) {
      setMediaFullyExpanded(true);
      setShowContent(true);
    } else if (newProgress < 0.75) {
      setShowContent(false);
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        handleInteraction(e.deltaY * 0.0009);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === 0) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        handleInteraction(deltaY * scrollFactor);
        touchStartY.current = touchY;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    const handleScroll = () => {
      if (!expandedRef.current) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleInteraction]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const titleParts = title ? title.split(' ') : [''];
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(' ');

  const isYoutube = mediaType === 'video' && mediaSrc.includes('youtube.com');
  const youtubeId = isYoutube ? mediaSrc.split('v=')[1]?.split('&')[0] : '';
  const embedSrc = isYoutube
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=${youtubeId}`
    : '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[calc(100dvh-5rem)]">
        <motion.div
          className="fixed inset-0 z-0 h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 - scrollProgress }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src={bgImageSrc}
            alt="Background"
            fill
            className="w-screen h-screen"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
          <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-10rem)] relative">
            <div
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden"
              style={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="relative w-full h-full pointer-events-none">
                {mediaType === 'video' ? (
                  isYoutube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={embedSrc}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => setIsLoading(false)}
                    />
                  ) : (
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      controls={false}
                      disablePictureInPicture
                      onLoadedData={() => setIsLoading(false)}
                    />
                  )
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    fill
                    className="object-cover"
                    onLoad={() => setIsLoading(false)}
                  />
                )}
                <div className="absolute inset-0 z-10 pointer-events-none"></div>
                <motion.div
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="flex flex-col items-center text-center absolute bottom-4 left-0 right-0 z-10 transition-none p-4">
                {date && (
                  <p
                    className="text-lg md:text-xl text-white/80"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p
                    className="text-white/80 font-medium text-center text-sm md:text-base"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            <div
              className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full relative z-10 transition-none flex-col pointer-events-none ${
                textBlend ? 'mix-blend-difference' : ''
              }`}
            >
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white transition-none font-headline"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white transition-none font-headline"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                {restOfTitle}
              </motion.h2>
            </div>
          </div>

          <motion.section
            className="flex flex-col w-full px-4 py-16 md:px-8 lg:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            {children}
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
