import React from "react";
import { MemoryRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
