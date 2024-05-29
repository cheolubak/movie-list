'use client';

import React, { Fragment } from 'react';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import { PageResponse } from '@/models/inner/response/pageResponse';
import { twclsx } from '@/utils/twclsx';
import InfinityScroll from '@/app/_components/InfinityScroll';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { apiMovies } from '@/apis/movies';
import MovieCard from '@/app/_components/MovieCard';
import { Typography } from '@mui/material';

interface MovieListProps {
  movies: PageResponse<MovieResponse>;
}

function MovieList({ movies }: MovieListProps) {
  const queryClient = useQueryClient();
  const { fetchNextPage, hasNextPage, isLoading, data } = useInfiniteQuery({
    initialPageParam: 2,
    queryKey: ['movies'],
    queryFn: ({ pageParam = 2 }) => {
      return apiMovies.getList(pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPage) {
        queryClient.prefetchQuery({
          queryKey: ['movies', lastPage.nextPage],
          queryFn: () => apiMovies.getList(lastPage.nextPage!),
        });
      }
      return lastPage.nextPage;
    },
  });

  const nextHandler = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <main
      className={twclsx(
        'grid',
        'xlg:grid-cols-5',
        'lg:grid-cols-3',
        'md:grid-cols-2',
        'sm:grid-cols-1',
        'grid-cols-2',
        'lg:gap-8',
        'gap-6',
        'justify-start',
        'items-start',
        'lg:m-8',
        'm-6',
      )}
    >
      <InfinityScroll onNext={nextHandler}>
        {movies.contents.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
        {data?.pages?.map((movies, idx) => (
          <Fragment key={idx}>
            {movies.contents.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
              />
            ))}
          </Fragment>
        ))}
      </InfinityScroll>
      {isLoading && (
        <Typography
          variant='body1'
          className={twclsx('mt-10')}
        >
          Loading...
        </Typography>
      )}
    </main>
  );
}

export default MovieList;
