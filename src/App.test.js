import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the landing page sections from data.json", () => {
  const { getByText, getAllByText } = render(<App />);
  expect(getByText("We are a Landing Page")).toBeInTheDocument();
  expect(getAllByText("Features").length).toBeGreaterThan(0);
  expect(getByText("Get In Touch")).toBeInTheDocument();
});
