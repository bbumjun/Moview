import React from "react";
import { MemoryRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/common/theme";
import { RecoilRoot } from "recoil";
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    </RecoilRoot>
  </ThemeProvider>
));
