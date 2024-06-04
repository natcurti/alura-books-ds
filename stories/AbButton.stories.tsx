import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbButton } from '../src/components/AbButton';

export default {
  title: 'components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = () => <AbButton />;

export const PrimaryButton = Template.bind({});
