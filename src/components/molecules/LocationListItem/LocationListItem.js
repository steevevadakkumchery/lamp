import WeatherIcon from "../../atoms/WeatherIcon";
import ListItemContainer from "../../atoms/ListItemContainer";

import "./LocationListItem.css";
function LocationListItem({
  title: city,
  parent,
  consolidated_weather: weatherData,
}) {
  const country = parent.title;
  const todayWeather = weatherData[0];
  const {
    weather_state_abbr: currentWeatherState,
    the_temp: currentTemperature,
  } = todayWeather;

  return (
    <li>
      <ListItemContainer selectable={true}>
        <div>
          <span>
            {city}, {country}
          </span>
        </div>
        <div className="temperature-and-icon-container">
          <span className="temperature">
            {Math.round(currentTemperature)}
            <span dangerouslySetInnerHTML={{ __html: "&deg;" }} />
          </span>
          <WeatherIcon weatherState={currentWeatherState} />
        </div>
      </ListItemContainer>
    </li>
  );
}

export default LocationListItem;
