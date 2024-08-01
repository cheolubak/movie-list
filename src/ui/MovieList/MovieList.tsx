'use client';

import { useMovieList } from 'hooks/Movies/useMovieList';
import { Card } from 'ui/MovieList/components/Card';
import { Header } from 'ui/MovieList/components/Header';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeGrid as Grid } from 'react-window';
import { GRID_COL_COUNT } from 'ui/MovieList/consts/MovieList.consts';

import styles from './MovieList.module.css';

export const MovieList = () => {
  const { data, count, gridCount, fetchNext } = useMovieList();

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: any;
  }) => {
    const movie = data[rowIndex * GRID_COL_COUNT + columnIndex];

    if (!movie) {
      return null;
    }

    return (
      <div style={style}>
        <Card
          key={movie.id}
          movie={movie}
        />
      </div>
    );
  };

  return (
    <main className={styles.container}>
      <Header />
      <div className={'h-full'}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={(index) => !!data[index]}
              itemCount={count}
              loadMoreItems={fetchNext}
            >
              {({ onItemsRendered, ref }) => (
                <Grid
                  ref={ref}
                  columnCount={gridCount}
                  height={height}
                  columnWidth={width / gridCount}
                  rowCount={Math.ceil(data.length / gridCount)}
                  rowHeight={781}
                  width={width}
                  onItemsRendered={(gridProps) => {
                    onItemsRendered({
                      overscanStartIndex:
                        gridProps.overscanRowStartIndex * gridCount,
                      overscanStopIndex:
                        gridProps.overscanRowStopIndex * gridCount,
                      visibleStartIndex:
                        gridProps.visibleRowStartIndex * gridCount,
                      visibleStopIndex:
                        gridProps.visibleRowStopIndex * gridCount,
                    });
                  }}
                >
                  {Cell}
                </Grid>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>

      {/*<List>*/}
      {/*  <InfinityScroll onNext={fetchNextPage}>*/}
      {/*    {data.map((movie) => (*/}
      {/*      <Card*/}
      {/*        key={movie.id}*/}
      {/*        movie={movie}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </InfinityScroll>*/}
      {/*</List>*/}
    </main>
  );
};
