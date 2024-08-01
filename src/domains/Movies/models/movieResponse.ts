import { Genres } from 'domains/models/common/genres';

export type MovieResponse = {
  id: number;
  url: string;
  title: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtitme: number;
  genres?: Genres[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: 'ok' | string;
  date_uploaded: string;
};
