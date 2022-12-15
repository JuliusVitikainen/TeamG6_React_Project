import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //Test actually fails here...Leaving it for now though.
  expect(linkElement).toBeInTheDocument();
});
