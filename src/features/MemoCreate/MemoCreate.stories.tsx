import { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
  title: 'components/MemoCreate',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '本文',
  },
};