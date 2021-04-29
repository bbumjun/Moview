import React from "react";
import { Story } from "@storybook/react";
import CastCard, { ICastCard } from "./index";
export default {
  component: CastCard,
  title: "CastCard",
};
const Template: Story<ICastCard> = (args) => <CastCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  creditId: "5bd27583c3a3687437003310",
  profilePath: "/hIuDik6KDmHLrqZWxBVdXzUw1kq.jpg",
  name: "Alexander Skarsgård",
  character: "Dr. Nathan Lind",
};
