import React from "react";
import Card from "./index";

export default {
  component: Card,
  title: "Card",
};
const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  posterPath: "/4SEAkDj7nflDPqCwD1LxrGkldTt.jpg",
  title: "빌로우제로",
  voteAverage: 6.5,
  country: "es",
  releaseDate: "2021-01-29",
};
