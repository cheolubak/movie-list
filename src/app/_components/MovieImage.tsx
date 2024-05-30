'use client';

import React from 'react';
import { twclsx } from '@/utils/twclsx';
import Image from 'next/image';

interface MovieImageProps {
  image: string;
  title: string;
}

function MovieImage({ image, title }: MovieImageProps) {
  return (
    <Image
      className={twclsx(
        'w-full',
        'object-contain',
        'lg:w-[512px]',
        'lg:min-w-[512px]',
        'w-full',
      )}
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
