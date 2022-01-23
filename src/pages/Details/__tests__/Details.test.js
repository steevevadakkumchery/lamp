import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Details from "../Details";

const mockData = {
  consolidated_weather: [
    {
      id: "12312",
      applicable_date: "2022-01-23",
      the_temp: 8,
      weather_state_name: "Raining Like hell",
    },
    {
      id: "12313",
      applicable_date: "2022-01-24",
      the_temp: 8,
      weather_state_name: "Raining Like hell",
    },
  ],
  woeid: "1234",
  title: "Shire",
  parent: { title: "New Zealand" },
};
const server = setupServer(
  rest.get("https://www.metaweather.com/api/location/1234", (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

describe("<Details />", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/details/1234"]}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );
  });

  test("render initial loading sequence", () => {
    const header = screen.getByTestId("details");
    const loader = screen.getByTestId("loader");
    expect(header.textContent).toEqual("Weather Finder");
    expect(loader).toBeTruthy();
  });

  test("render initial page after data", async () => {
    await waitFor(() => screen.getByTestId("current-weather"));
    const header = screen.getByTestId("details");
    const loader = screen.queryByTestId("loader");
    const temperatureElement = screen.getAllByText("8");
    const weatherDescription = screen.getByText("Raining Like hell");
    const location = screen.getByText("Shire, New Zealand");
    let dateElement = screen.getByText("Date: 2022-01-23");
    expect(header.textContent).toEqual("Weather Finder");
    expect(loader).toBeFalsy();
    expect(temperatureElement[0].textContent).toEqual("8°");
    expect(weatherDescription).toBeTruthy();
    expect(location).toBeTruthy();
    expect(dateElement).toBeTruthy();
    const firstDay = screen.getByTestId("day-0");
    fireEvent.click(firstDay);
    dateElement = screen.getByText("Date: 2022-01-23");
    expect(dateElement).toBeTruthy();
    const secondDay = screen.getByTestId("day-1");
    fireEvent.click(secondDay);
    dateElement = screen.getByText("Date: 2022-01-24");
    expect(dateElement).toBeTruthy();
  });
});
