import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("<App />", () => {
  test("App lands on homepage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByTestId("homepage");
    expect(element).toBeTruthy();
  });
  test("App lands on details page", () => {
    render(
      <MemoryRouter initialEntries={["/details/1234"]}>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByTestId("details");
    expect(element).toBeTruthy();
  });
  test("App lands on details page", () => {
    render(
      <MemoryRouter initialEntries={["/sdf"]}>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByText(/Page not found/);
    expect(element).toBeTruthy();
  });
});
