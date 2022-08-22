import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LoadingSection, Props } from '../src/LoadingSection';

const meta: Meta = {
  title: 'Loading Section',
  component: LoadingSection,
};

export default meta;

const Template: Story<Props> = args => <LoadingSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    message: 'Waiting for the right network...',
    subMessage: 'Go to your MetaMask extension to switch',
  },
};
