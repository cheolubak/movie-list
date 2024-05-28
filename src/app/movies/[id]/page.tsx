import MovieDetail from '@/app/movies/[id]/_components/MovieDetail';
import { apiMovies } from '@/apis/movies';

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
  const res = await apiMovies.getDetail(params.id);

  return <MovieDetail movie={res} />;
}
