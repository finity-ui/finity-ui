import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Cards, Props } from '../src/Cards/index';

const featureImage = require('../public/image39.png');
const profileImage = require('../public/profile.png');
const meta: Meta = {
  title: 'Cards',
  component: Cards,
};

export default meta;

const Template: Story<Props> = args => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    heading: 'Heading',
    featuredImageUrl: featureImage,
    subHeading: 'Lorem ipsum dolor sit amet.',
    profileUrl: profileImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.',
  },
};
