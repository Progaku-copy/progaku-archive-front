import LinkText from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'components/LinkText',
    component: LinkText,
    argTypes: {
        children: { control: 'text' },
        href: { control: 'text' },
    },
    parameters: {
        backgrounds: {
            default: 'lightBlue',
            values: [
                { name: 'lightBlue', value: '#1E90FF' },
            ],
        },
    },
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'メモ一覧',
        href: '/',
    },
    render: (args) => (
        <div className="flex space-x-10">
            <LinkText {...args} />
            <LinkText href="/">メモ作成</LinkText>
        </div>
    ),
};
