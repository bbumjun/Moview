import React from "react";
import { Story } from "@storybook/react";
import CardList, { CardListProps } from "./index";

export default {
  component: CardList,
  title: "CardList",
};
const Template: Story<CardListProps> = (args) => <CardList {...args} />;
export const Default = Template.bind({});
Default.args = {
  category: "movie",
  params: {
    sort_by: "popularity.desc",
    with_original_language: "ko",
  },
  contentTitle: "국내 인기 영화",
};
