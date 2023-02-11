import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChatRoom from "./ChatRoom";

export default {
  title: "Chat-Application/ChatRoom",
  component: ChatRoom,
} as ComponentMeta<typeof ChatRoom>;

const Template: ComponentStory<typeof ChatRoom> = (args) => <ChatRoom />;

export const basic = Template.bind({});
