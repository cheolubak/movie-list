'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { movieOptionsState } from 'dataStores/recoil/selectors/movieOptionsState';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { getMovieList } from 'domains/Movies/useCases/movie.useCase';
import { PageResponse } from 'domains/models/common/pageResponse';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

export const useMovieList = () => {
  const { genre, sort } = useRecoilValue(movieOptionsState);

  const {
    data: result,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    getNextPageParam: (lastPage: PageResponse<MovieResponse>) =>
      lastPage.nextPage,
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      getMovieList({
        genre,
        page: pageParam,
        sort,
      }),
    queryKey: ['movies', sort, genre],
  });

  useEffect(() => {
    refetch();
  }, [sort, genre]);

  const data = useMemo(
    () => result?.pages.flatMap((page) => page.contents) ?? [],
    [result],
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
  };
};
