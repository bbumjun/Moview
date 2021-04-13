import React from "react";
import { Story } from "@storybook/react";
import MainPage from "./index";

export default {
  component: MainPage,
  title: "MainPage",
};
const Template: Story = () => <MainPage />;
export const Default = Template.bind({});
Default.args = {};
