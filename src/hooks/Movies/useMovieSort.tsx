import { sortState } from 'dataStores/recoil/atoms/sortState';
import { useRecoilState } from 'recoil';

export const useMovieSort = () => {
  const [sort, setSort] = useRecoilState(sortState);

  return { changeSort: setSort, sort };
};
