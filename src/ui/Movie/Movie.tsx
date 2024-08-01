import { Chip, Typography } from '@mui/material';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import { Back } from 'ui/Movie/components/Back';
import { Ratings } from 'ui/Movie/components/Ratings';
import { Image } from 'ui/common/components/Image';

import styles from './Movie.module.css';

interface Props {
  movie: MovieResponse;
}

export const Movie = ({ movie }: Props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Back />
      </header>
      <section className={styles.content}>
        <Image
          alt={movie.title_long}
          imgHeight={1080}
          imgWidth={1920}
          src={movie.large_cover_image}
        />
        <article>
          <Typography
            className={styles.title}
            component='h1'
            variant='h3'
          >
            {movie.title_long}
          </Typography>
          <Typography
            className={styles.description}
            variant='body1'
          >
            {movie.description_full}
          </Typography>
          <ul className={styles.tags}>
            {movie.genres?.map((genre) => (
              <li key={genre}>
                <Chip
                  color='primary'
                  label={genre}
                />
              </li>
            ))}
          </ul>
          <Ratings rating={movie.rating} />
        </article>
      </section>
      <iframe
        className={styles.video}
        id='player'
        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
        title={movie.title_long}
      />
    </main>
  );
};
