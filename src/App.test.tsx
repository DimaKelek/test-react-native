import React from "react";
import * as renderer from "@testing-library/react-native";
import { test, expect } from "vitest";
import { App } from "./App";

test("<App /> render", () => {
  const view = renderer.render(<App />);

  expect(view.findAllByTestId("app-container")).toBeTruthy();
});
