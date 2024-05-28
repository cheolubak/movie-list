import { fetchApis } from '@/utils/fetchApi';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import { PageResponse } from '@/models/inner/response/pageResponse';

export const apiMovies = {
  async getDetail(id: number) {
    return fetchApis.dynamic.get<MovieResponse>(`movies/${id}`, {
      next: {
        revalidate: 60,
      },
    });
  },

  async getList(page: number) {
    return fetchApis.dynamic.get<PageResponse<MovieResponse>>('movies', {
      next: {
        revalidate: 60,
      },
      params: {
        page,
      },
    });
  },
};
