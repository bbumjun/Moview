import React from "react";
import { Story } from "@storybook/react";
import Image, { ImageProps } from "./index";

export default {
  component: Image,
  title: "Image",
};
const Template: Story<ImageProps> = (args) => <Image {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: "https://image.tmdb.org/t/p/w500/4SEAkDj7nflDPqCwD1LxrGkldTt.jpg",
  alt: "사진 설명",
};
