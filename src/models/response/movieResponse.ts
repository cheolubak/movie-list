import {Genres} from "@/models/enums/genres";

export type MovieResponse = {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtitme: number;
  genres: Genres[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  large_cover_image: string;
  state: 'ok' | string;
  date_uploaded: string;
}
