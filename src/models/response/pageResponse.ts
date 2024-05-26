export type PageResponse<T> = {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: T[];
}