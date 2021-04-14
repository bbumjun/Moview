import React from "react";
import { Story } from "@storybook/react";
import AspectRatio, { AspectRatioProps } from "./index";
import Image from "components/atoms/Image";
export default {
  component: AspectRatio,
  title: "AspectRatio",
};
const Template: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <Image
      src="https://image.tmdb.org/t/p/original/vq2cqGRmhEFQ2wS4D3BMcYRoUK4.jpg"
      alt=""
    />
  </AspectRatio>
);
export const Default = Template.bind({});
Default.args = {
  ratio: 0.67,
};
