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
  category: "movie",
  params: {
    sort_by: "popularity.desc",
    with_original_language: "ko",
  },
  contentTitle: "국내 인기 영화",
};
