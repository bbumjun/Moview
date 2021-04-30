import React from "react";
import { Story } from "@storybook/react";
import ContentCard, { ContentCardProps } from "./index";

export default {
  component: ContentCard,
  title: "ContentCard",
};
const Template: Story<ContentCardProps> = (args) => <ContentCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  category: "movie",
  title: "빌로우제로",
  imgSrc: "https://image.tmdb.org/t/p/w500/4SEAkDj7nflDPqCwD1LxrGkldTt.jpg",
  rate: 3.3,
  date: "2021-01-29",
  inex: 1,
  voteCount: 3000,
};
