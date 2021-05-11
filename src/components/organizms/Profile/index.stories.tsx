import React from "react";
import { Story } from "@storybook/react";
import Profile from "./index";
import movieDetailData from "fakeData/movieDetail";
import { IProfile } from "./index";
export default {
  component: Profile,
  title: "Profile",
};
const Template: Story<IProfile> = (args) => <Profile {...args} />;
export const Default = Template.bind({});
Default.args = {
  contentType: "movie",
  id: "399566",
};
