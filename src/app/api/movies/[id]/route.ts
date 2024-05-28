import { fetchApis } from '@/utils/fetchApi';
import { ResultResponse } from '@/models/outer/response/resultResponse';
import { MovieDetailResponse } from '@/models/outer/response/movieDetailResponse';

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
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
}
