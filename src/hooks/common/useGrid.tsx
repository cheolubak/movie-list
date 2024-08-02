'use client';

import {
  BreakPointGridCount,
  BreakPointKeys,
} from 'domains/models/common/breakPointGridCount';
import { useLayoutEffect, useState } from 'react';

const BREAK_POINTS = {
  xlg: 1920,
  lg: 1280,
  md: 1024,
  sm: 640,
  xs: 480,
};

export const useGrid = ({
  width,
  breakPointGridCounts,
  defaultCounts = 4,
}: {
  width?: number;
  breakPointGridCounts?: BreakPointGridCount;
  defaultCounts?: number;
}) => {
  const [gridCount, setGridCount] = useState<number>(0);

  useLayoutEffect(() => {
    console.log(width);
    if (!width) return;

    if (!breakPointGridCounts) {
      return setGridCount(defaultCounts);
    }

    Object.entries(BREAK_POINTS).map(([key, value]) => {
      console.log(key, value);
      if (breakPointGridCounts[key as BreakPointKeys] && width >= value) {
        setGridCount(defaultCounts);
      }
    });
  }, [width]);

  return { gridCount };
};
