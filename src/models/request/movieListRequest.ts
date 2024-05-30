import { Sort } from '@/models/enums/sort';
import { Genres } from '@/models/enums/genres';

export type MovieListRequest = {
  page: number;
  sort?: Sort;
  genre?: Genres;
};
