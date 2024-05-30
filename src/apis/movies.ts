import { fetchApis } from '@/utils/fetchApi';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import { PageResponse } from '@/models/inner/response/pageResponse';
import { Sort } from '@/models/enums/sort';
import { MovieListRequest } from '@/models/request/movieListRequest';
import { Genres } from '@/models/enums/genres';

export const apiMovies = {
  async getDetail(id: number) {
    return fetchApis.dynamic.get<MovieResponse>(`movies/${id}`, {
      next: {
        revalidate: 60,
      },
    });
  },

  async getList({
    page,
    sort = Sort.YEAR,
    genre = Genres.ALL,
  }: MovieListRequest) {
    return fetchApis.dynamic.get<PageResponse<MovieResponse>>('movies', {
      next: {
        revalidate: 60,
      },
      params: {
        page,
        sort,
        genre,
      },
    });
  },
};
