import React from "react";
import { Story } from "@storybook/react";
import SearchInput, { SearchInputProps } from "./index";

export default {
  component: SearchInput,
  title: "SearchInput",
};
const Template: Story<SearchInputProps> = () => (
  <SearchInput
    inputProps={{
      value: "",
      placeholder: "Search...",
      inputName: "searchInput",
      onChange: () => {},
    }}
    labelName="라벨명"
  />
);
export const Default = Template.bind({});
Default.args = {};
