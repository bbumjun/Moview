import React from "react";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  component: Button,
  title: "Button",
};
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);
export const Default = Template.bind({});
Default.args = {
  children: "버튼",
};
