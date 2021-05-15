import React from "react";
import { Story } from "@storybook/react";
import Overview, { IOverview } from "./index";
export default {
  component: Overview,
  title: "Overview",
};
const Template: Story<IOverview> = (args) => <Overview {...args} />;
export const Default = Template.bind({});
Default.args = {
  contentType: "movie",
  id: "567189",
};
