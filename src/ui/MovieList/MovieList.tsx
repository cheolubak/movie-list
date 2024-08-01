'use client';

import { useMovieList } from 'hooks/Movies/useMovieList';
import { Card } from 'ui/MovieList/components/Card';
import { Header } from 'ui/MovieList/components/Header';
import { List } from 'ui/MovieList/components/List';
import InfinityScroll from 'ui/common/components/InfinityScroll';

export const MovieList = () => {
  const { data, fetchNextPage } = useMovieList();
  return (
    <>
      <Header />
      <List>
        <InfinityScroll onNext={fetchNextPage}>
          {data.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </InfinityScroll>
      </List>
    </>
  );
};
