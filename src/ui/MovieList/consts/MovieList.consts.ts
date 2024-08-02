import { Sort } from 'domains/models/common/sort';
import { Genres } from 'domains/models/common/genres';

export const SORT_LIST = [
  Sort.YEAR,
  Sort.RATING,
  Sort.TITLE,
  Sort.PEERS,
  Sort.SEEDS,
  Sort.DOWNLOAD_COUNT,
  Sort.LIKE_COUNT,
  Sort.DATE_ADDED,
];

export const GENRE_LIST = [
  Genres.ALL,
  Genres.ACTION,
  Genres.ADVENTURE,
  Genres.ANIMATION,
  Genres.COMEDY,
  Genres.CRIME,
  Genres.DRAMA,
  Genres.FANTASY,
  Genres.HORROR,
  Genres.MYSTERY,
  Genres.ROMANCE,
  Genres.THRILLER,
  Genres.DOCUMENTARY,
  Genres.FAMILY,
  Genres.MUSIC,
  Genres.MUSICAL,
  Genres.SPORT,
  Genres.WAR,
];

export const SCROLL_BAR_WIDTH = 16;
