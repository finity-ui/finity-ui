import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ConnectionLoadingModal, Props } from '../src/ConnectionLoadingModal';

const meta: Meta = {
  title: 'Connection Loading Modal',
  component: ConnectionLoadingModal,
};

export default meta;

const Template: Story<Props> = args => <ConnectionLoadingModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    heading: 'Switch to the Polygon network in MetaMask',
    subHeading:
      'Confirm the request that’s just appeared. If you can’t a request, open your Metamask account',
    message: 'Waiting for the right network...',
    subMessage: ' This won’t cost you any Ether',
  },
};
