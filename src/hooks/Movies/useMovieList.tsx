'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { movieOptionsState } from 'dataStores/recoil/selectors/movieOptionsState';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useWindowSize } from 'hooks/common/useWindowSize';
import { useMovieListQuery } from 'data/Movies/queries/useMovieListQuery';

export const useMovieList = () => {
  const { genre, sort } = useRecoilValue(movieOptionsState);
  const { width } = useWindowSize();
  const [gridCount, setGridCount] = useState<number>(4);

  useLayoutEffect(() => {
    if (!width) return;

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
  } = useInfiniteQuery(useMovieListQuery({ sort, genre }));

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
      fetchNextPage({ cancelRefetch: true });
    }
  };

  return {
    data,
    count,
    fetchNext,
    isLoading,
    width,
    hasNextPage,
    gridCount,
  };
};
