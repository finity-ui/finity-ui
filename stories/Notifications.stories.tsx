import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Notifications, Props } from '../src/Notifications/index';

const meta: Meta = {
  title: 'Notifications',
  component: Notifications,
};

export default meta;

const Template: Story<Props> = args => <Notifications {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'You’re on the right network.',
  variant: 'active',
};
