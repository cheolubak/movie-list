import { fetchApis } from "@/utils/fetchApi";
import { ResultResponse } from "@/models/response/resultResponse";
import { PageResponse } from "@/models/response/pageResponse";
import { MovieResponse } from "@/models/response/movieResponse";
import MovieList from "@/components/movie_list";

export default async function Home() {
  const movies =
    await fetchApis.dynamic.get<ResultResponse<PageResponse<MovieResponse>>>(
      "movies",
    );

  console.log(movies);
  return (
    <main>
      <MovieList />
    </main>
  );
}
