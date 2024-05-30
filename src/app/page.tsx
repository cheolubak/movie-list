import MovieList from '@/app/_components/MovieList';
import { apiMovies } from '@/apis/movies';
import { Metadata } from 'next';
import { PageResponse } from '@/models/inner/response/pageResponse';
import { MovieResponse } from '@/models/inner/response/movieResponse';

export const metadata: Metadata = {
  title: 'Home - CheoluBak Portfolio',
  description: 'CheoluBak Portfolio Page. The movie list page.',
};

export default async function Home() {
  let movies: PageResponse<MovieResponse> | undefined;
  try {
    movies = await apiMovies.getList({ page: 1 });
  } catch (err) {
    movies = undefined;
  }

  if (!movies) {
    return null;
  }

  return <MovieList movies={movies} />;
}
