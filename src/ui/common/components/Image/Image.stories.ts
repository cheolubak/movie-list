import type { Meta, StoryObj } from '@storybook/react';
import { Image } from 'ui/common/components/Image/Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://yts.mx/assets/images/movies/the_final_attack_on_wembley_2024/large-cover.jpg',
    imgWidth: 512,
    imgHeight: 512,
    showWidth: 512,
    showHeight: 512,
    alt: 'Test Image',
  },
};

export const ErrorImage: Story = {
  args: {
    src: '',
    imgWidth: 512,
    imgHeight: 512,
    showWidth: 512,
    showHeight: 512,
    alt: 'Error Image',
  },
};
