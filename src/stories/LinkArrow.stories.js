import React from "react"
import LinkArrow from '../components/ui/LinkArrow'

export default {
  title: "UI/Link Arrow",
  component: LinkArrow,
  background: "#eee",
  argTypes: {
    theme: {
      options: ['default', 'sprinklr', 'sightbox', 'inquicker', 'invision'],
      control: { type: 'select' }
    }
  }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <LinkArrow {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: "Link Text",
  arrowDirectionForward: true,
  theme: "inquicker"
  ,
};

