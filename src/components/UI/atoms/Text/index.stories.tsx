import React from "react";
import Text, { TextProps } from "./index";
import { Story } from "@storybook/react";

export default {
  component: Text,
  title: "Text",
};
const Template: Story<TextProps> = (args) => <Text {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: "텍스트 컴포넌트",
  className: "text-5xl",
};
