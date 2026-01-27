import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // Automatically infers argTypes for actions
  argTypes: {
    onPress: { action: 'pressed' },
  },
  // Use a decorator to wrap the component (replacing your manual <View>)
  decorators: [
    (Story) => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    title: 'Hello World',
  },
};