'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { movieOptionsState } from 'dataStores/recoil/selectors/movieOptionsState';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { getMovieList } from 'domains/Movies/useCases/movie.useCase';
import { PageResponse } from 'domains/models/common/pageResponse';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useWindowSize } from 'hooks/common/useWindowSize';

export const useMovieList = () => {
  const { genre, sort } = useRecoilValue(movieOptionsState);
  const { width } = useWindowSize();
  const [gridCount, setGridCount] = useState<number>(4);

  useLayoutEffect(() => {
    if (width >= 1920) {
      setGridCount(4);
    } else if (width >= 1280) {
      setGridCount(3);
    } else if (width >= 640) {
      setGridCount(2);
    } else {
      setGridCount(1);
    }
  }, [width]);

  const {
    data: result,
    fetchNextPage,
    hasNextPage,
    isLoading,
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

  const count = useMemo(() => result?.pages[0].count ?? 0, [result]);

  const fetchNext = () => {
    console.log('fetchNextPage');
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return {
    data,
    count,
    fetchNext,
    isLoading,
    hasNextPage,
    gridCount,
  };
};
