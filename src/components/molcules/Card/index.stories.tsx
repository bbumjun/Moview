import React from "react";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./index";

export default {
  component: Card,
  title: "Card",
};
const Template: Story<CardProps> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  category: "movie",
  title: "빌로우제로",
  imgSrc: "https://image.tmdb.org/t/p/w500/4SEAkDj7nflDPqCwD1LxrGkldTt.jpg",
  rate: 6.5,
  date: "2021-01-29",
  inex: 1,
};
