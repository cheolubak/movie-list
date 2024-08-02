import type { Meta, StoryObj } from '@storybook/react';
import { Ratings } from 'ui/Movie/components/Ratings';

const meta = {
  title: 'Components/Ratings',
  component: Ratings,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 10,
  },
};
