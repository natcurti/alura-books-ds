import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbButton, AbButtonProps } from '../src/components/AbButton';

export default {
  title: 'components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  text: 'Ab Button Primary',
  type: 'primary',
} as AbButtonProps;

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  text: 'Ab Button Secondary',
  type: 'secondary',
} as AbButtonProps;
