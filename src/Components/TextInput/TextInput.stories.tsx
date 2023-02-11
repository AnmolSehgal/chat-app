import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./TextInput";

export default {
  title: "Chat-Application/TextInput",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const basic = Template.bind({});
basic.args = {
  name: "basic",
  placeholder: "basic placeholders",
};
