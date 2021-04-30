import React from "react";
import { Story } from "@storybook/react";
import Loader from "./index";
export default {
  component: Loader,
  title: "Loader",
};
const Template: Story = (args) => <Loader />;
export const Default = Template.bind({});
Default.args = {};
