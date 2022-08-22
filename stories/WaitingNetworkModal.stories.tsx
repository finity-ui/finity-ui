import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WaitingNetworkModal, Props } from '../src/WaitingNetworkModal';

const meta: Meta = {
  title: 'Waiting Network Modal',
  component: WaitingNetworkModal,
};

export default meta;

const Template: Story<Props> = args => <WaitingNetworkModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    heading: 'Switch to the Polygon network in MetaMask',
    subHeading:
      'The Polygon ID only works on the Polygon Mainnet. You’re currently on the Testnet.',
    message: 'Waiting for the right network...',
    subMessage: 'Go to your MetaMask extension to switch',
  },
};
