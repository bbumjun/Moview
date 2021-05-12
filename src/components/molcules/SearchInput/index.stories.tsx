import React from "react";
import { Story } from "@storybook/react";
import SearchInput, { SearchInputProps } from "./index";

export default {
  component: SearchInput,
  title: "SearchInput",
};
const Template: Story<SearchInputProps> = () => (
  <SearchInput
    value=""
    placeholder="Search..."
    inputName="searchInput"
    onChange={(e) => {}}
  />
);
export const Default = Template.bind({});
Default.args = {};
