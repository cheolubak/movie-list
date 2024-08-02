import { Sort } from 'domains/models/common/sort';
import { Genres } from 'domains/models/common/genres';
import { getMovieList } from 'domains/Movies/useCases/movie.useCase';
import { PageResponse } from 'domains/models/common/pageResponse';
import { MovieResponse } from 'domains/Movies/models/movieResponse';

export const useMovieListQuery = ({
  sort,
  genre,
}: {
  sort: Sort;
  genre: Genres;
}) => {
  return {
    getNextPageParam: (lastPage: PageResponse<MovieResponse>) =>
      lastPage.nextPage,
    initialPageParam: 0,
    queryKey: ['movies'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMovieList({
        genre,
        page: pageParam,
        sort,
      }),
  };
};
