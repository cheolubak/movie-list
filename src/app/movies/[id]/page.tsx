import MovieDetail from '@/app/movies/[id]/_components/MovieDetail';
import { apiMovies } from '@/apis/movies';
import { MovieResponse } from '@/models/inner/response/movieResponse';

export async function generateMetadata({ params }: { params: { id: number } }) {
  const res = await apiMovies.getDetail(params.id);

  return {
    title: res.title_long,
    description: res.description_full,
    openGraph: {
      images: [res.large_cover_image],
    },
  };
}

export default async function Movie({ params }: { params: { id: number } }) {
  let movie: MovieResponse | undefined;
  try {
    movie = await apiMovies.getDetail(params.id);
  } catch (err) {
    movie = undefined;
  }

  if (!movie) {
    return null;
  }

  return <MovieDetail movie={movie} />;
}
