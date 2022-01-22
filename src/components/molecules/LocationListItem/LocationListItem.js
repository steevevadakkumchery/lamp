import "./LocationListItem.css";
import WeatherIcon from "../../atoms/WeatherIcon";
function LocationListItem({ title: city, parent, consolidated_weather }) {
  const country = parent.title;
  const todayWeather = consolidated_weather[0];
  const {
    weather_state_abbr: currentWeatherState,
    the_temp: currentTemperature,
  } = todayWeather;

  return (
    <li>
      <div className="location-item">
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
      </div>
    </li>
  );
}

export default LocationListItem;
