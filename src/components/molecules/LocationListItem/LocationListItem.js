import { useNavigate } from "react-router-dom";

import WeatherIcon from "../../atoms/WeatherIcon";
import ListItemContainer from "../../atoms/ListItemContainer";
import Temperature from "../../atoms/Temperature";
import LocationName from "../../atoms/LocationName";
import "./LocationListItem.css";
function LocationListItem({
  woeid,
  title: city,
  parent,
  consolidated_weather: weatherData,
}) {
  const navigate = useNavigate();

  const country = parent.title;
  const todayWeather = weatherData[0];
  const {
    weather_state_abbr: currentWeatherState,
    the_temp: currentTemperature,
  } = todayWeather;

  const handleSelect = () => {
    navigate(`/details/${woeid}`);
  };

  return (
    <li onClick={handleSelect}>
      <ListItemContainer selectable={true}>
        <div>
          <LocationName city={city} country={country} />
        </div>
        <div className="temperature-and-icon-container">
          <Temperature temperature={currentTemperature} type="small" />
          <WeatherIcon weatherState={currentWeatherState} type="small" />
        </div>
      </ListItemContainer>
    </li>
  );
}

export default LocationListItem;
