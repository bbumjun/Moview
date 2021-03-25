import React from "react";
import Text, { TextProps } from "./index";
import { Story } from "@storybook/react";

export default {
  component: Text,
  title: "Text",
};
const Template: Story<TextProps> = (args) => (
  <Text {...args}>텍스트 컴포넌트</Text>
);
export const Small = Template.bind({});
Small.args = {
  size: "sm",
};
export const Normal = Template.bind({});
Normal.args = {
  size: "base",
};
export const Big1 = Template.bind({});
Big1.args = {
  size: "lg",
};
export const Big2 = Template.bind({});
Big2.args = {
  size: "xl",
};
