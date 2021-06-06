import React from "react";
import { Story } from "@storybook/react";
import ContentList, { ContentListProps } from "./index";

export default {
  component: ContentList,
  title: "ContentList",
};
const Template: Story<ContentListProps> = (args) => <ContentList {...args} />;
export const Default = Template.bind({});
Default.args = {
  contentTitle: "인기있는 한국 영화",
  contentType: "movie",
  url: "discover/movie",
  params: { sort_by: "popularity.desc", with_original_language: "ko" },
};
