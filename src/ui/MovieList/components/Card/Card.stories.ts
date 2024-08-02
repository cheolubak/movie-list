import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'ui/MovieList/components/Card';
import { Genres } from 'domains/models/common/genres';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: {
      runtitme: 0,
      id: 62714,
      url: 'https://yts.mx/movies/the-pastor-2025',
      title: 'The Pastor',
      title_long: 'The Pastor (2025)',
      slug: 'the-pastor-2025',
      year: 2025,
      rating: 0,
      genres: [Genres.ACTION, Genres.DRAMA],
      summary: '',
      description_full: '',
      synopsis: '',
      yt_trailer_code: '',
      language: 'en',
      mpa_rating: '',
      background_image:
        'https://yts.mx/assets/images/movies/the_pastor_2024/background.jpg',
      background_image_original:
        'https://yts.mx/assets/images/movies/the_pastor_2024/background.jpg',
      small_cover_image:
        'https://yts.mx/assets/images/movies/the_pastor_2024/small-cover.jpg',
      medium_cover_image:
        'https://yts.mx/assets/images/movies/the_pastor_2024/medium-cover.jpg',
      large_cover_image:
        'https://yts.mx/assets/images/movies/the_pastor_2024/large-cover.jpg',
      state: 'ok',
      date_uploaded: '2024-07-09 02:59:38',
    },
  },
};
