import { Genres } from 'domains/models/common/genres';
import { Sort } from 'domains/models/common/sort';

export type MovieListRequest = {
  genre?: Genres;
  page: number;
  sort?: Sort;
};
