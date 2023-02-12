import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "./HomePage";

export default {
  title: "Chat-Application/HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const basic = Template.bind({});
