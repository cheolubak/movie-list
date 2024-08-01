import { Genres } from 'domains/models/common/genres';
import { nanoid } from 'nanoid';
import { atom } from 'recoil';

export const genreState = atom<Genres>({
  default: Genres.ALL,
  key: `genreState-${nanoid(10)}`,
});
