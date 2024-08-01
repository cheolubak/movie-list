import { MovieListRequest } from 'data/Movies/request/movieListRequest';
import { MovieDetailResponse as OuterMovieDetailResponse } from 'data/Movies/response/movieDetailResponse';
import { MovieResponse as OuterMovieResponse } from 'data/Movies/response/movieResponse';
import { PageResponse as OuterPageResponse } from 'data/common/response/pageResponse';
import { fetchApis } from 'data/common/utils/fetchApi';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { PageResponse } from 'domains/models/common/pageResponse';

export const outerToInner = (data: OuterMovieResponse): MovieResponse => ({
  ...data,
});

export const outerToInnerDetail = (
  data: OuterMovieDetailResponse,
): MovieResponse => outerToInner(data.movie);

export const outerToInnerList = (
  data: OuterPageResponse<OuterMovieResponse>,
  nextPage?: number,
): PageResponse<MovieResponse> => {
  return {
    contents: data.movies.map(outerToInner),
    count: data.movie_count,
    hasNext: nextPage !== undefined,
    nextPage,
  };
};

export const getMovieList = async ({
  genre,
  page,
  sort,
}: MovieListRequest): Promise<PageResponse<MovieResponse>> => {
  return fetchApis.dynamic.get<PageResponse<MovieResponse>>('movies', {
    next: {
      revalidate: 86400,
    },
    params: {
      genre,
      page,
      sort,
    },
  });
};

export const getMovie = async (movieId: number): Promise<MovieResponse> => {
  return fetchApis.dynamic.get<MovieResponse>(`movies/${movieId}`, {
    next: {
      revalidate: 86400,
    },
  });
};
