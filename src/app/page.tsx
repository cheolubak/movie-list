import MovieList from '@/app/_components/MovieList';
import { apiMovies } from '@/apis/movies';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - CheoluBak Portfolio',
  description: 'CheoluBak Portfolio Page. The movie list page.',
};

export default async function Home() {
  const movies = await apiMovies.getList(1);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
