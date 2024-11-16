import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header } from './';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="font-sans">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const UserHeader: Story = {
	args: {
		isAdmin: false,
	},
};

export const AdminHeader: Story = {
  args: {
    isAdmin: true,
  },
};