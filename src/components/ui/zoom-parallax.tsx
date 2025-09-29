'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: ImageProps[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const pictures = [
    {
      scale: scale4,
    },
    {
      scale: scale5,
      top: '-30vh',
      left: '5vw',
      width: '35vw',
      height: '30vh',
    },
    {
      scale: scale6,
      top: '-10vh',
      left: '-25vw',
      width: '20vw',
      height: '45vh',
    },
    {
      scale: scale5,
      left: '27.5vw',
      width: '25vw',
      height: '25vh',
    },
    {
      scale: scale6,
      top: '27.5vh',
      left: '5vw',
      width: '20vw',
      height: '25vh',
    },
    {
      scale: scale8,
      top: '27.5vh',
      left: '-22.5vw',
      width: '30vw',
      height: '25vh',
    },
    {
      scale: scale9,
      top: '22.5vh',
      left: '25vw',
      width: '15vw',
      height: '15vh',
    },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          if (index >= pictures.length) return null;
          const { scale, top, left, width, height } = pictures[index];

          return (
            <motion.div
              key={index}
              style={{ scale }}
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
