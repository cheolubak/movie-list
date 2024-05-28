import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'h1',
            'h2',
            'h3',
            'subtitle',
            'body',
            'bold',
            'small',
            'pretitle',
            'button',
          ],
        },
      ],
    },
  },
});

export const twclsx = (...classes: ClassValue[]) => {
  return customMerge(clsx(classes));
};
