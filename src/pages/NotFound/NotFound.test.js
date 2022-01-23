import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("renders page not found text", () => {
    render(<NotFound />);

    const element = screen.getByText(/Page not found/);
    expect(element).toBeTruthy();
  });
});
