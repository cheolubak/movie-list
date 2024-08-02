import type { Meta, StoryObj } from '@storybook/react';
import { Header } from 'ui/MovieList/components/Header';
import { RecoilRoot } from 'recoil';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
