import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "Chat-Application/Textarea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const basic = Template.bind({});
basic.args = {
  name: "basic",
  placeholder: "basic placeholders",
};
