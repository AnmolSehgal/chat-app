import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MessageComponent from "./MessageComponent";

export default {
  title: "Chat-Application/MessageComponent",
  component: MessageComponent,
} as ComponentMeta<typeof MessageComponent>;

const Template: ComponentStory<typeof MessageComponent> = (args) => (
  <MessageComponent {...args} />
);

export const basic = Template.bind({});
basic.args = {
  meUser: true,
  userName: "John Doe",
  text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
};
