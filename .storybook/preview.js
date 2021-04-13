import React from "react";
import { MemoryRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/common/theme";
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  </ThemeProvider>
));
