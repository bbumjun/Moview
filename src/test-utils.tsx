import React, { FC, ReactElement, Suspense } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import theme from "common/theme";
import ErrorBoundary from "./components/atoms/ErrorBoundary";
import Loader from "components/atoms/Loader";
const AllTheProviders: FC = ({ children }) => {
  return (
    <MemoryRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </MemoryRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
