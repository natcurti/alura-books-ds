import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTextField, IAbTextFieldProps } from '../src';

export default {
  title: 'components/AbTextField',
  component: AbTextField,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbTextField>;

const Template: ComponentStory<typeof AbTextField> = args => (
  <AbTextField {...args} />
);

export const AbCampoTextoComponent = Template.bind({});
AbCampoTextoComponent.args = {
  label: 'Uma label interessante',
} as IAbTextFieldProps;
