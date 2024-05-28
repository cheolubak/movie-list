import { fetchApis } from "@/utils/fetchApi";
import { MovieResponse } from "@/models/response/movieResponse";
import { ResultResponse } from "@/models/response/resultResponse";

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const { id } = params;

  const res = await fetchApis.movie.get<ResultResponse<MovieResponse>>(
    "movie_details.json",
    {
      params: {
        movie_id: id,
      },
    },
  );

  return Response.json(res);
}
