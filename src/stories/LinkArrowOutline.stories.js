import React from "react"
import LinkArrowOutline from '../components/ui/LinkArrowOutline'

export default {
  title: "UI/Link Arrow Outline",
  component: LinkArrowOutline,
  background: "#eee",
  argTypes: {
    theme: {
      options: ['default', 'sprinklr', 'sightbox', 'inquicker', 'invision'],
      control: { type: 'select' }
    }
  }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <LinkArrowOutline {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: "Link Text",
  theme: "inquicker"
  ,
};

