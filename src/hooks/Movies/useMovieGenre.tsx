import { genreState } from 'dataStores/recoil/atoms/genreState';
import { useRecoilState } from 'recoil';

export const useMovieGenre = () => {
  const [genre, setGenre] = useRecoilState(genreState);

  return {
    changeGenre: setGenre,
    genre,
  };
};
