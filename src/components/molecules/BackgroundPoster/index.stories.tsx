import React from "react";
import { Story } from "@storybook/react";
import BackgroundPoster, { IBackgroundPoster } from "./index";
export default {
  component: BackgroundPoster,
  title: "BackgroundPoster",
};
const Template: Story<IBackgroundPoster> = (args) => (
  <BackgroundPoster {...args} />
);
export const Default = Template.bind({});
Default.args = {
  imageSrc: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
};
