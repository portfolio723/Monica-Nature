import africa from './placeholder-images/africa.json';
import antarctica from './placeholder-images/antarctica.json';
import asia from './placeholder-images/asia.json';
import australia from './placeholder-images/australia.json';
import caribbean from './placeholder-images/caribbean.json';
import europe from './placeholder-images/europe.json';
import general from './placeholder-images/general.json';
import northAmerica from './placeholder-images/north-america.json';
import oceania from './placeholder-images/oceania.json';
import southAmerica from './placeholder-images/south-america.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = [
  ...general.placeholderImages,
  ...africa.placeholderImages,
  ...antarctica.placeholderImages,
  ...asia.placeholderImages,
  ...australia.placeholderImages,
  ...caribbean.placeholderImages,
  ...europe.placeholderImages,
  ...northAmerica.placeholderImages,
  ...oceania.placeholderImages,
  ...southAmerica.placeholderImages,
];
