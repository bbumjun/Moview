import React from "react";
import Input, { InputProps } from "./index";
import { Story } from "@storybook/react";

export default {
  component: Input,
  title: "Input",
};
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "아무거나 입력해주세요",
  onChange: () => {},
  className: "",
};
