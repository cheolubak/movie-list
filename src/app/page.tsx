import { Metadata } from 'next';
import { Suspense } from 'react';
import { MovieList } from 'ui/MovieList';
import { useMovieListQuery } from 'data/Movies/queries/useMovieListQuery';
import { Genres } from 'domains/models/common/genres';
import { Sort } from 'domains/models/common/sort';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export const metadata: Metadata = {
  description: 'CheoluBak Portfolio Page. The movie list page.',
  title: 'Home - CheoluBak Portfolio',
};

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    useMovieListQuery({ sort: Sort.YEAR, genre: Genres.ALL }),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<span>Loading...</span>}>
        <MovieList />
      </Suspense>
    </HydrationBoundary>
  );
}
