import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import Disclaimer from './Disclaimer';
import { loremIpsum } from '../lib/loremIpsum';

type DisclaimerProps = Parameters<typeof Disclaimer>[0];

export default {
  title: 'Components/Disclaimer',
  component: Disclaimer,
} as Meta;

const Template: Story<DisclaimerProps> = (args) => <Disclaimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'HELLO WORLD',
} as DisclaimerProps;
Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/lpPfgxi321n60CvD4EJv3x/Nori-App-Designs?node-id=715%3A17019',
  },
};
