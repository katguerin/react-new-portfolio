import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // first test
  it("renders", () => {
    render(<About />);
  });
  // second test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
