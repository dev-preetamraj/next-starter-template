import type { Meta, StoryObj } from '@storybook/react';
import Card, { ICard } from './Card';
import { mockBaseTemplateProps } from './Card.mocks';

const meta = {
  title: 'card/Card',
  component: Card,
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as ICard,
};
