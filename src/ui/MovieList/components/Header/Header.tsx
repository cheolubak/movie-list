import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Genres } from 'domains/models/common/genres';
import { Sort } from 'domains/models/common/sort';
import { useMovieGenre } from 'hooks/Movies/useMovieGenre';
import { useMovieSort } from 'hooks/Movies/useMovieSort';
import React, { memo } from 'react';
import { GENRE_LIST, SORT_LIST } from 'ui/MovieList/consts/MovieList.consts';

import styles from './Header.module.css';

export const Header = memo(() => {
  const { changeSort, sort } = useMovieSort();
  const { changeGenre, genre } = useMovieGenre();
  const handleChangeSort = (event: SelectChangeEvent<Sort>) => {
    changeSort(event.target.value as Sort);
  };

  const handleChangeGenre = (event: SelectChangeEvent<Genres>) => {
    changeGenre(event.target.value as Genres);
  };

  return (
    <header className={styles.listHeader}>
      <Typography
        className={styles.title}
        component='h1'
        variant='subtitle1'
      >
        MOVIE
      </Typography>
      <nav>
        <ul className={styles.menus}>
          <li>
            <FormControl fullWidth>
              <Select
                onChange={handleChangeGenre}
                placeholder='GENRE'
                value={genre}
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
                onChange={handleChangeSort}
                placeholder='SORT'
                value={sort}
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
  );
});

Header.displayName = 'Header';
