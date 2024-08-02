'use client';

import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeGrid as Grid } from 'react-window';
import { SCROLL_BAR_WIDTH } from 'ui/MovieList/consts/MovieList.consts';
import AutoSizer from 'react-virtualized-auto-sizer';

import styles from './VitualGrid.module.css';
import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { useWindowSize } from 'hooks/common/useWindowSize';
import type { BreakPointGridCount } from 'domains/models/common/breakPointGridCount';
import { useGrid } from 'hooks/common/useGrid';

interface Props<T = never> {
  data: T[];
  count: number;
  fetchNext: () => void;
  breakPointGridCounts?: BreakPointGridCount;
  children: (props: {
    columnIndex: number;
    rowIndex: number;
    data: T[][];
    style: any;
  }) => ReactNode;
}

export const VirtualGrid = <T = never,>({
  data,
  count,
  fetchNext,
  breakPointGridCounts,
  children,
}: Props<T>) => {
  const { width } = useWindowSize();
  const { gridCount } = useGrid({ width, breakPointGridCounts });
  const ref = useRespondToColumnChange(width);

  const preppedItems = useMemo(() => {
    console.log(data, gridCount);
    return prepareItemsForGrid(data, gridCount);
  }, [data, width]);

  return (
    <div className={styles.container}>
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
                    visibleStopIndex: gridProps.visibleRowStopIndex * gridCount,
                  });
                }}
              >
                {children}
              </Grid>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
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
