import WeatherIcon from "../../atoms/WeatherIcon";
import LocationName from "../../atoms/LocationName";

import "./CurrentWeather.css";
import Temperature from "../../atoms/Temperature";

function CurrentWeather({ weatherToday, city, country }) {
  const { weather_state_abbr: weatherState, the_temp: temperature } =
    weatherToday;
  return (
    <div>
      <div className="icon-container">
        <WeatherIcon type="large" weatherState={weatherState} />
        <Temperature temperature={temperature} type="large" />
        <h2>
          <LocationName city={city} country={country} />
        </h2>
      </div>
    </div>
  );
}

export default CurrentWeather;
