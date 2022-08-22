import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  VerificationLoadingModal,
  Props,
} from '../src/VerificationLoadingModal';

const meta: Meta = {
  title: 'Verification Loading Modal',
  component: VerificationLoadingModal,
};

export default meta;

const Template: Story<Props> = args => <VerificationLoadingModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    heading: 'Verify Ethereum account',
    subHeading:
      'Sign the message that’s just appearedjust appeared and we’ll connect you. Tis shows us you have access to this account. If you can’t see a message, open your Metamask extension.',
    message: 'Waiting for you to sign...',
    subMessage: 'This won’t cost you any Ether',
  },
};
