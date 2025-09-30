'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function ImageGallery() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
			<div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				
				{Array.from({ length: 3 }).map((_, col) => (
					<div key={col} className="grid gap-6">
						{Array.from({ length: 10 }).map((_, index) => {
							return (
								<GalleryImage
									key={`${col}-${index}`}
									col={col}
									index={index}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

function GalleryImage({ col, index }: { col: number; index: number }) {
	const [isPortrait, setIsPortrait] = React.useState(false);

	React.useEffect(() => {
		setIsPortrait(Math.random() > 0.5);
	}, []);
	
	const width = isPortrait ? 1080 : 1920;
	const height = isPortrait ? 1920 : 1080;
	const ratio = isPortrait ? 9 / 16 : 16 / 9;

	return (
		<AnimatedImage
			alt={`Image ${col}-${index}`}
			src={`https://picsum.photos/seed/${col}-${index}/${width}/${height}`}
			ratio={ratio}
			placeholder={`https://placehold.co/${width}x${height}/`}
		/>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	placeholder?: string;
	ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
	const [isLoading, setIsLoading] = React.useState(true);

	const [imgSrc, setImgSrc] = React.useState(src);

	const handleError = () => {
		if (placeholder) {
			setImgSrc(placeholder);
		}
	};

	return (
		<AspectRatio
			ratio={ratio}
			className="bg-muted relative size-full rounded-lg border"
		>
			<img
				alt={alt}
				src={imgSrc}
				className={cn(
					'size-full rounded-lg object-cover transition-opacity duration-1000 ease-in-out',
					{
						'opacity-100': !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				onError={handleError}
			/>
		</AspectRatio>
	);
}
