import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button/index';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Connect to Wallet',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Connect to Wallet',
  onClick: action('secondary click'),
};
Tertiary.args = {
  variant: 'tertiary',
  children: 'Connect to Wallet',
  onClick: action('tertiary click'),
};
