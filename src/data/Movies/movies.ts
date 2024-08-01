import { MovieListRequest } from 'data/Movies/request/movieListRequest';
import { MovieDetailResponse as OuterMovieDetailResponse } from 'data/Movies/response/movieDetailResponse';
import { MovieResponse as OuterMovieResponse } from 'data/Movies/response/movieResponse';
import { PageResponse as OuterPageResponse } from 'data/common/response/pageResponse';
import { ResultResponse as OuterResultResponse } from 'data/common/response/resultResponse';
import { fetchApis } from 'data/common/utils/fetchApi';
import { Genres } from 'domains/models/common/genres';
import { Sort } from 'domains/models/common/sort';

export const getMovieList = ({
  genre = Genres.ALL,
  page,
  sort = Sort.YEAR,
}: MovieListRequest) => {
  return fetchApis.movie.get<
    OuterResultResponse<OuterPageResponse<OuterMovieResponse>>
  >('list_movies.json', {
    params: {
      genre: genre,
      order_by: 'desc',
      page,
      sort_by: sort,
    },
  });
};

export const getMovie = (movieId: string) => {
  return fetchApis.movie.get<OuterResultResponse<OuterMovieDetailResponse>>(
    'movie_details.json',
    {
      params: {
        movie_id: movieId,
      },
    },
  );
};
