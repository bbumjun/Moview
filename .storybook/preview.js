import React, { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/common/theme";
import { RecoilRoot } from "recoil";
import Loader from "../src/components/atoms/Loader";
import ErrorBoundary from "../src/components/atoms/ErrorBoundary";
import GlobalStyle from "../src/components/GlobalStyle";
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <GlobalStyle />
          <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </ThemeProvider>
));
