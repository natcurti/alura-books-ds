import React from 'react';
import { AbTag, AbTagProps } from '../src/';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  text: 'Tag',
} as AbTagProps;
