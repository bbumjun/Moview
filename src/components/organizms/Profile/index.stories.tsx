import React from "react";
import { Story } from "@storybook/react";
import Profile from "./index";
import { IContentDetail } from "types";
import movieDetailData from "fakeData/movieDetail";
export default {
  component: Profile,
  title: "Profile",
};
const Template: Story<IContentDetail> = (args) => (
  <Profile {...args} bgColor={"black"} />
);
export const Default = Template.bind({});
Default.args = {
  ...movieDetailData,
};
