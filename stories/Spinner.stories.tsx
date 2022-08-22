import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, Props } from '../src/Spinner/';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
};

export default meta;

const Template: Story<Props> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};
