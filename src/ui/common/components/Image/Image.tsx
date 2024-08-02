'use client';

import { default as NextImage } from 'next/image';

import styles from './Image.module.css';

interface Props {
  alt: string;
  imgHeight: number;
  imgWidth: number;
  showHeight?: number;
  showWidth?: number;
  src: string;
}

export const Image = ({
  alt,
  imgHeight,
  imgWidth,
  showHeight,
  showWidth,
  src,
}: Props) => {
  return (
    <NextImage
      alt={alt}
      className={styles.image}
      height={imgHeight}
      onError={(event) => {
        const { target } = event;
        if (target instanceof HTMLImageElement) {
          target.src = '/movie-not-found.webp';
          target.srcset = '/movie-not-found.webp';
        }
      }}
      src={src}
      style={{ height: showHeight, width: showWidth }}
      width={imgWidth}
    />
  );
};
