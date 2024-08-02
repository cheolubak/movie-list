'use client';

import { useMovieList } from 'hooks/Movies/useMovieList';
import { Card } from 'ui/MovieList/components/Card';
import { Header } from 'ui/MovieList/components/Header';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeGrid as Grid } from 'react-window';

import styles from './MovieList.module.css';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { SCROLL_BAR_WIDTH } from 'ui/MovieList/consts/MovieList.consts';
import { useEffect, useMemo, useRef } from 'react';

const Cell = ({
  columnIndex,
  rowIndex,
  data,
  style,
}: {
  columnIndex: number;
  rowIndex: number;
  data: MovieResponse[][];
  style: any;
}) => {
  const movie = data[rowIndex][columnIndex];

  if (!movie) {
    return null;
  }

  return (
    <div
      style={{ ...style }}
      className={styles.cell}
    >
      <Card
        key={movie.id}
        movie={movie}
      />
    </div>
  );
};

export const MovieList = () => {
  const { data, count, width, gridCount, fetchNext } = useMovieList();

  const ref = useRespondToColumnChange(width);

  const preppedItems = useMemo(() => {
    return prepareItemsForGrid(data, gridCount);
  }, [data, width]);

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={(index) => !!data[index]}
              itemCount={count}
              loadMoreItems={fetchNext}
            >
              {({ onItemsRendered }) => (
                <Grid
                  ref={ref}
                  columnCount={gridCount}
                  height={height}
                  columnWidth={() => (width - SCROLL_BAR_WIDTH) / gridCount}
                  rowCount={preppedItems.length}
                  rowHeight={() => 821}
                  width={width}
                  itemData={preppedItems}
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
    </main>
  );
};

function useRespondToColumnChange(width?: number) {
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.resetAfterIndices({
        columnIndex: 0,
        rowIndex: 0,
        shouldForceUpdate: true,
      });
    }
  }, [width]);

  return ref;
}

function prepareItemsForGrid<T>(items: T[], columnCount = 1) {
  const result = [];
  const clone = [...items];

  while (clone.length) {
    const row = clone.splice(0, columnCount);
    result.push(row);
  }

  return result;
}
