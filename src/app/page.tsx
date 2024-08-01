import { Metadata } from 'next';
import { Suspense } from 'react';
import { MovieList } from 'ui/MovieList';

export const metadata: Metadata = {
  description: 'CheoluBak Portfolio Page. The movie list page.',
  title: 'Home - CheoluBak Portfolio',
};

export default async function Home() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <MovieList />
    </Suspense>
  );
}
