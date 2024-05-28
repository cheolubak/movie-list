import { getRequestParams } from '@/utils/requestHelper';
import { fetchApis } from '@/utils/fetchApi';
import { ResultResponse } from '@/models/outer/response/resultResponse';
import { PageResponse } from '@/models/outer/response/pageResponse';
import { MovieResponse } from '@/models/outer/response/movieResponse';
import { isFetchApiError } from '@/utils/fetchApiError';

export async function GET(request: Request) {
  try {
    const queryString = getRequestParams(request);

    const { page } = queryString;

    const res = await fetchApis.movie.get<
      ResultResponse<PageResponse<MovieResponse>>
    >('list_movies.json', {
      params: {
        page,
      },
    });

    const { data, status, status_message } = res;

    if (status !== 'ok') {
      return new Response(status_message, { status: 500 });
    }

    const { movie_count, limit, movies } = data;
    const hasNext = Math.ceil(movie_count / limit) > +page;

    return Response.json({
      count: movie_count,
      hasNext,
      contents: [...movies],
      nextPage: hasNext ? Number(page) + 1 : undefined,
    });
  } catch (err: any) {
    if (isFetchApiError(err)) {
      return new Response(err.response, { status: err.status });
    }
    return new Response(err.message, { status: 500 });
  }
}
