// cypress/mocks/next/image.tsx
import type { ImageProps } from 'next/image';

/**
 * Converts the next/image static image URL to a regular path.
 *
 * Example:
 *
 * /_next/static/media/404.ea2b1f50.png -> /assets/images/404.png
 */
const convertURL = (url: string) => {
  return url
    .replace(/\/_next\/static\/media\//, '/assets/images/') // Use actual images location
    .replace(/(?<=\.)(.+)(?=png|jp?eg|tiff?|png|webp|bmp|gif)/, '');
};

const Image = (props: ImageProps) => {
  // Regular path to image resource
  if (typeof props.src === 'string') {
    return (
      <img
        src={props.src}
        alt='image element'
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

  let src: string;
  // StaticImageData - an import of image resource
  if ('src' in props.src) {
    src = props.src.src;
  } else {
    // StaticRequire
    src = props.src.default.src;
  }

  return (
    <img
      src={convertURL(src)}
      alt='image element'
      onError={(event) => {
        const { target } = event;
        if (target instanceof HTMLImageElement) {
          target.src = '/movie-not-found.webp';
          target.srcset = '/movie-not-found.webp';
        }
      }}
    />
  );
};

export default Image;
