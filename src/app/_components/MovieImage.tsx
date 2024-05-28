'use client';

import React from 'react';
import { twclsx } from '@/utils/twclsx';
import Image from 'next/image';

interface MovieImageProps {
  image: string;
  title: string;
  className?: string;
}

function MovieImage({ image, title, className }: MovieImageProps) {
  return (
    <Image
      className={twclsx('w-full', 'object-contain', className)}
      src={image}
      alt={title}
      width={256}
      height={256}
      onError={(event) => {
        const { target } = event;
        if (target instanceof HTMLImageElement) {
          target.src = '/movie-not-found.webp';
          target.srcset = '/movie-not-found.webp';
        }
      }}
    />
  );
}

export default MovieImage;
