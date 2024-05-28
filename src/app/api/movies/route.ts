import { getRequestParams } from "@/utils/requestHelper";
import { fetchApis } from "@/utils/fetchApi";
import { ResultResponse } from "@/models/response/resultResponse";
import { PageResponse } from "@/models/response/pageResponse";
import { MovieResponse } from "@/models/response/movieResponse";

export async function GET(request: Request) {
  const queryString = getRequestParams(request);

  const { page } = queryString;

  const res = await fetchApis.movie.get<
    ResultResponse<PageResponse<MovieResponse>>
  >("list_movies.json", {
    params: {
      page,
    },
  });

  return Response.json(res);
}
