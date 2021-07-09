import React from "react"
import LinkArrowOutline from './LinkArrowOutline'

export default {
  title: "UI/Link Arrow Outline",
  component: LinkArrowOutline,
  background: "#eee",
  argTypes: {
    theme: {
      options: ['sprinklr', 'sightbox', 'inquicker', 'invision'],
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

