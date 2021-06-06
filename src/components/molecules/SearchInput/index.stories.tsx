import React from "react";
import { Story } from "@storybook/react";
import SearchInput, { SearchInputProps } from "./index";

export default {
  component: SearchInput,
  title: "SearchInput",
};
const Template: Story<SearchInputProps> = () => (
  <SearchInput
    placeholder="Search..."
    inputName="searchInput"
    handleInputChange={(e) => {}}
  />
);
export const Default = Template.bind({});
Default.args = {};
