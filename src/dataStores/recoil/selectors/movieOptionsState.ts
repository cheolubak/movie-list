import { genreState } from 'dataStores/recoil/atoms/genreState';
import { sortState } from 'dataStores/recoil/atoms/sortState';
import { Genres } from 'domains/models/common/genres';
import { Sort } from 'domains/models/common/sort';
import { nanoid } from 'nanoid';
import { selector } from 'recoil';

export const movieOptionsState = selector<{
  genre: Genres;
  sort: Sort;
}>({
  get: ({ get }) => {
    const sort = get(sortState);
    const genre = get(genreState);

    return { genre, sort };
  },
  key: `movieOptionsState-${nanoid(10)}`,
});
