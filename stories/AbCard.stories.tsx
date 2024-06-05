import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard, IAbCard } from '../src';

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = args => <AbCard {...args} />;

export const AbCardComponent = Template.bind({});
AbCardComponent.args = {
  text: 'Your text here',
} as IAbCard;
