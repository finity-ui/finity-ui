import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Cards, Props } from '../src/Cards/index';
import imageFile from '../public/image39.png';
import profile from '../public/profile.png';

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
    featuredImageUrl: imageFile,
    subHeading: 'Lorem ipsum dolor sit amet.',
    profileUrl: profile,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.',
  },
};
