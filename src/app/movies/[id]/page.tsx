import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { getMovie } from 'domains/Movies/useCases/movie.useCase';
import { cache } from 'react';
import { Movie } from 'ui/Movie';

const cacheMovie = cache(getMovie);

export async function generateMetadata({ params }: { params: { id: number } }) {
  const res = await cacheMovie(params.id);

  return {
    description: res.description_full,
    openGraph: {
      images: [res.large_cover_image],
    },
    title: res.title_long,
  };
}

export default async function MoviePage({
  params,
}: {
  params: { id: number };
}) {
  let movie: MovieResponse | undefined;
  try {
    movie = await cacheMovie(params.id);
  } catch (err) {
    movie = undefined;
  }

  if (!movie) {
    return null;
  }

  return <Movie movie={movie} />;
}
