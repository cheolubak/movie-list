import { fetchApis } from '@/utils/fetchApi';
import { ResultResponse } from '@/models/outer/response/resultResponse';
import { MovieDetailResponse } from '@/models/outer/response/movieDetailResponse';
import { isFetchApiError } from '@/utils/fetchApiError';

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

    const res = await fetchApis.movie.get<ResultResponse<MovieDetailResponse>>(
      'movie_details.json',
      {
        params: {
          movie_id: id,
        },
      },
    );

    const { data, status, status_message } = res;

    if (status !== 'ok') {
      return new Response(status_message, { status: 500 });
    }

    return Response.json(data.movie);
  } catch (err) {
    console.error(err);
    if (isFetchApiError(err)) {
      return new Response(err.message, {
        status: err.status,
        headers: err.headers,
      });
    }

    return new Response('Internal Server Error', {
      status: 500,
    });
  }
}
