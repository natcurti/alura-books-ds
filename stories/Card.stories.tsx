import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../src/components/Card';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <h1>Olá!</h1>
  </Card>
);

export const CardComponent = Template.bind({});
