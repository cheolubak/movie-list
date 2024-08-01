import { getRequestParams } from 'data/common/utils/requestHelper';
import { isFetchApiError } from 'data/common/utils/fetchApiError';
import { MovieListRequest } from 'data/Movies/request/movieListRequest';
import { getMovieList } from 'data/Movies/movies';
import { outerToInnerList } from 'domains/Movies/useCases/movie.useCase';

export async function GET(request: Request) {
  try {
    const params = getRequestParams<MovieListRequest>(request);
    const res = await getMovieList(params);

    const page = Number(params.page);
    if (isNaN(page)) {
      return new Response('Invalid data', { status: 400 });
    }

    const { data, status, status_message } = res;

    if (status !== 'ok') {
      return new Response(status_message, { status: 400 });
    }

    const { movie_count, limit } = data;
    const hasNext = Math.ceil(movie_count / limit) > page;
    const nextPage = hasNext ? page + 1 : undefined;

    return Response.json(outerToInnerList(data, nextPage));
  } catch (err: unknown) {
    console.log(err);
    if (isFetchApiError(err)) {
      return new Response(err.response, { status: err.status });
    }
    return new Response('INTERNAL ERROR', { status: 500 });
  }
}
