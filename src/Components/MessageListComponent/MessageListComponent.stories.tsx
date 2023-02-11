import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MessageListComponent from "./MessageListComponent";

export default {
  title: "Chat-Application/MessageListComponent",
  component: MessageListComponent,
} as ComponentMeta<typeof MessageListComponent>;

const Template: ComponentStory<typeof MessageListComponent> = (args) => (
  <MessageListComponent {...args} />
);

export const basic = Template.bind({});
basic.args = {
  messages: [
    {
      meUser: true,
      userName: "John Doe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: false,
      userName: "John fDoe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: true,
      userName: "John Doe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: false,
      userName: "John fDoe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: true,
      userName: "John Doe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: false,
      userName: "John fDoe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: true,
      userName: "John Doe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
    {
      meUser: false,
      userName: "John fDoe",
      text: "loremm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lore",
    },
  ],
};
