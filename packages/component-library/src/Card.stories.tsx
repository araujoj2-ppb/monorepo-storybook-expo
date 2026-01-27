import React from 'react';
import { Text } from 'react-native';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Basic = () => (
  <Card>
    <Text>This is content inside a card from the UI library.</Text>
  </Card>
);