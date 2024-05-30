import React from 'react';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import { twclsx } from '@/utils/twclsx';
import { Chip, Typography } from '@mui/material';
import Rating from '@/app/movies/[id]/_components/Rating';
import MovieImage from '@/app/_components/MovieImage';
import BackButton from '@/app/movies/[id]/_components/BackButton';

interface MovieDetailProps {
  movie: MovieResponse;
}

function MovieDetail({ movie }: MovieDetailProps) {
  return (
    <main
      className={twclsx(
        'flex',
        'flex-col',
        'justify-start',
        'items-center',
        'lg:w-10/12',
        'w-full',
        'bg-white',
        'lg:mx-auto',
        'lg:p-6',
        'py-6',
        'px-3',
      )}
    >
      <div className={twclsx('w-full')}>
        <BackButton />
      </div>
      <section
        className={twclsx(
          'flex',
          'md:flex-row',
          'flex-col',
          'justify-start',
          'items-start',
          'gap-6',
          'mb-8',
        )}
      >
        <MovieImage
          image={movie.large_cover_image}
          title={movie.title_long}
        />
        <article>
          <Typography
            variant='h3'
            component='h1'
            className={twclsx('!mb-4')}
          >
            {movie.title_long}
          </Typography>
          <Typography
            variant='body1'
            className={twclsx('!mb-8')}
          >
            {movie.description_full}
          </Typography>
          <ul
            className={twclsx(
              'flex',
              'justify-start',
              'items-center',
              'gap-2',
              'mb-6',
            )}
          >
            {movie.genres?.map((genre) => (
              <li key={genre}>
                <Chip
                  label={genre}
                  color='primary'
                />
              </li>
            ))}
          </ul>
          <Rating rating={movie.rating} />
        </article>
      </section>
      <iframe
        title={movie.title_long}
        className={twclsx('w-full', 'aspect-video', 'mb-8')}
        id='player'
        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
        frameBorder='0'
      />
    </main>
  );
}

export default MovieDetail;
