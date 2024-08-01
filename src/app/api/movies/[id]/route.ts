import { getMovie } from 'data/Movies/movies';
import { isFetchApiError } from 'data/common/utils/fetchApiError';
import { outerToInnerDetail } from 'domains/Movies/useCases/movie.useCase';

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  try {
    const { id } = params;

    const { data } = await getMovie(id);

    return Response.json(outerToInnerDetail(data));
  } catch (err: unknown) {
    if (isFetchApiError(err)) {
      return new Response(err.response, { status: err.status });
    }
    return new Response('INTERNAL ERROR', { status: 500 });
  }
}
