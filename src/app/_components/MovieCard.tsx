import React from 'react';
import { MovieResponse } from '@/models/inner/response/movieResponse';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { twclsx } from '@/utils/twclsx';
import Link from 'next/link';
import { KeyboardArrowRight } from '@mui/icons-material';
import MovieImage from '@/app/_components/MovieImage';

interface MovieCardProps {
  movie: MovieResponse;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card
      key={movie.id}
      variant='elevation'
      elevation={6}
    >
      <CardContent>
        <Typography
          variant='h5'
          component='h2'
          color='text.secondary'
          gutterBottom
        >
          {movie.title}
        </Typography>
        <Typography
          variant='body1'
          color='text.primary'
          component='div'
          className={twclsx('line-clamp-5', 'mb-4')}
        >
          {movie.description_full}
        </Typography>
        <MovieImage
          image={movie.medium_cover_image}
          title={movie.title_long}
        />
      </CardContent>
      <CardActionArea>
        <Link
          href={`/movies/${movie.id}`}
          className={twclsx(
            'flex',
            'justify-center',
            'items-center',
            'gap',
            'text-blue-500',
            'font-bold',
          )}
        >
          <CardActions>
            GO DETAIL
            <KeyboardArrowRight fontSize='small' />
          </CardActions>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
