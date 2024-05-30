'use client';

import React, { Fragment, useRef, useState } from 'react';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import { PageResponse } from '@/models/inner/response/pageResponse';
import { twclsx } from '@/utils/twclsx';
import InfinityScroll from '@/app/_components/InfinityScroll';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { apiMovies } from '@/apis/movies';
import MovieCard from '@/app/_components/MovieCard';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Sort } from '@/models/enums/sort';
import { Genres } from '@/models/enums/genres';

interface MovieListProps {
  movies: PageResponse<MovieResponse>;
}

const SORT_LIST = [
  Sort.YEAR,
  Sort.RATING,
  Sort.TITLE,
  Sort.PEERS,
  Sort.SEEDS,
  Sort.DOWNLOAD_COUNT,
  Sort.LIKE_COUNT,
  Sort.DATE_ADDED,
];

const GENRE_LIST = [
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

function MovieList({ movies }: MovieListProps) {
  const [sort, setSort] = useState(Sort.YEAR);
  const [genre, setGenre] = useState(Genres.ALL);

  const listRef = useRef<HTMLElement | null>(null);

  const queryClient = useQueryClient();
  const { fetchNextPage, hasNextPage, isLoading, data, refetch } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ['movies', sort, genre],
      queryFn: ({ pageParam = 1 }) => {
        return apiMovies.getList({ page: pageParam, sort, genre });
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.nextPage) {
          queryClient.prefetchQuery({
            queryKey: ['movies', lastPage.nextPage, sort, genre],
            queryFn: () =>
              apiMovies.getList({ page: lastPage.nextPage!, sort, genre }),
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

  const changeSortHandler = (event: SelectChangeEvent) => {
    setSort(event.target.value as Sort);
    refetch();

    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeGenreHandler = (event: SelectChangeEvent) => {
    setGenre(event.target.value as Genres);
    refetch();

    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={twclsx(
          'sticky',
          'top-0',
          'flex',
          'justify-between',
          'items-center',
          'py-6',
          'lg:px-6',
          'px-3',
          'bg-white',
          'z-50',
        )}
      >
        <Typography
          variant='subtitle1'
          component='h1'
          className={twclsx('font-bold')}
        >
          MOVIE
        </Typography>
        <nav>
          <ul
            className={twclsx('flex', 'justify-end', 'items-center', 'gap-2')}
          >
            <li>
              <FormControl fullWidth>
                <Select
                  placeholder='GENRE'
                  value={genre}
                  onChange={changeGenreHandler}
                >
                  {GENRE_LIST.map((x) => (
                    <MenuItem
                      key={x}
                      value={x}
                    >
                      {x}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </li>
            <li>
              <FormControl fullWidth>
                <Select
                  placeholder='SORT'
                  value={sort}
                  onChange={changeSortHandler}
                >
                  {SORT_LIST.map((x) => (
                    <MenuItem
                      key={x}
                      value={x}
                    >
                      {x}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </li>
          </ul>
        </nav>
      </header>
      <main
        ref={listRef}
        className={twclsx(
          'grid',
          'xlg:grid-cols-4',
          'lg:grid-cols-3',
          'sm:grid-cols-2',
          'grid-cols-1',
          'lg:gap-8',
          'gap-6',
          'justify-start',
          'items-start',
          'lg:m-8',
          'lg:p-6',
          'py-6',
          'px-3',
        )}
      >
        <InfinityScroll onNext={nextHandler}>
          {!data &&
            movies.contents.map((movie) => (
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
    </>
  );
}

export default MovieList;
