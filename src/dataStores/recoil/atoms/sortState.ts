import { Sort } from 'domains/models/common/sort';
import { nanoid } from 'nanoid';
import { atom } from 'recoil';

export const sortState = atom<Sort>({
  default: Sort.YEAR,
  key: `sortState-${nanoid(10)}`,
});
