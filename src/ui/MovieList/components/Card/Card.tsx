import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Card as MUICard,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { MovieResponse } from 'domains/Movies/models/movieResponse';
import Link from 'next/link';
import React from 'react';
import { Image } from 'ui/common/components/Image';

import styles from './Card.module.css';

interface Props {
  movie: MovieResponse;
}

export const Card = ({ movie }: Props) => {
  return (
    <MUICard
      elevation={6}
      variant='elevation'
    >
      <CardContent>
        <Typography
          className={styles.title}
          color='text.secondary'
          component='h2'
          gutterBottom
          variant='h5'
        >
          {movie.title}
        </Typography>
        <Typography
          className={styles.description}
          color={movie.description_full ? 'text.primary' : 'text.secondary'}
          component='div'
          variant='body1'
        >
          {movie.description_full || 'No Description...'}
        </Typography>
        <Image
          alt={movie.title_long}
          imgHeight={512}
          imgWidth={512}
          src={movie.medium_cover_image}
        />
      </CardContent>
      <CardActionArea>
        <Link
          className={styles.link}
          href={`/movies/${movie.id}`}
        >
          <CardActions>
            GO DETAIL
            <KeyboardArrowRight fontSize='small' />
          </CardActions>
        </Link>
      </CardActionArea>
    </MUICard>
  );
};
