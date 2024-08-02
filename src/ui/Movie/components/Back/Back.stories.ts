import type { Meta, StoryObj } from '@storybook/react';
import { Back } from 'ui/Movie/components/Back';

const meta = {
  title: 'Components/Back',
  component: Back,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Back>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
