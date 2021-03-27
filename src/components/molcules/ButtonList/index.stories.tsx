import React from "react";
import { Story } from "@storybook/react";
import ButtonList, { ButtonListProps } from "./index";
import Button from "../../atoms/Button";
export default {
  component: ButtonList,
  title: "ButtonList",
};
const buttonItems = [
  <Button onClick={() => {}}>버튼1</Button>,
  <Button onClick={() => {}}>버튼2</Button>,
];
const Template: Story<ButtonListProps> = (args) => (
  <ButtonList {...args}>{buttonItems}</ButtonList>
);
export const Default = Template.bind({});
Default.args = {};
