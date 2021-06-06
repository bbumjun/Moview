import React from "react";
import { Story } from "@storybook/react";
import MainPage from "./index";
import Header from "src/components/organisms/Header";
import Footer from "src/components/organisms/Footer";

export default {
  component: MainPage,
  title: "MainPage",
};
const Template: Story = () => (
  <>
    <Header />
    <MainPage />
    <Footer />
  </>
);
export const Default = Template.bind({});
Default.args = {};
