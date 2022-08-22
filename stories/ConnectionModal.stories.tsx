import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ConnectionModal, Props } from '../src/ConnectionModal/index';

const meta: Meta = {
  title: 'Connection Modal',
  component: ConnectionModal,
};

export default meta;

const Template: Story<Props> = args => <ConnectionModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    heading: 'Before you connect',
    subHeading:
      'Connecting lets you use the Rimble Demo App via your Ethereum account.',
    col1Heading: 'The blockchain is public',
    col1description:
      'Your Ethereum account activity is public on the blockchain. Choose an account you don’t mind being linked with your activity here.',
    col2Heading: 'Have some Ether for fees',
    col2description:
      'You’ll need Ether to pay transaction fees. Buy Ether from exchanges like Coinbase.',
    col2link: 'What are transaction fees?',
    col3Heading: 'Have the right account ready',
    col3description:
      'If you have multiple Ethereum accounts, check that the one you want to use is active in your browser.',
  },
};
