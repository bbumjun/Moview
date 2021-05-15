import React from "react";
import { Story } from "@storybook/react";
import Header, { IHeaderProps } from "./index";

export default {
  component: Header,
  title: "Header",
};
const Template: Story<IHeaderProps> = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {};
