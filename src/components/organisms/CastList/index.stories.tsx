import React from "react";
import { Story } from "@storybook/react";
import CastList, { ICastList } from "./index";

export default {
  component: CastList,
  title: "CastList",
};
const Template: Story<ICastList> = (args) => <CastList {...args} />;
export const Default = Template.bind({});
Default.args = {
  contentType: "movie",
  id: "567189",
};
