'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt?: string;
  scale?: MotionValue<number>;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect */
  images: CustomImageProps[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const defaultScale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt, scale, top, left, width, height }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale: scale || defaultScale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                style={{ top, left, width, height }}
                className="relative h-[25vh] w-[25vw] sm:h-[25vh] sm:w-[25vw] md:h-[25vh] md:w-[25vw] lg:h-[25vh] lg:w-[25vw]"
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
