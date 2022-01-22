import "./LocationListItem.css";
import WeatherIcon from "../../atoms/WeatherIcon";
function LocationListItem({ name }) {
  return (
    <li>
      <div className="location-item">
        <div>
          <span>{name}</span>
          <span>See more</span>
        </div>
        <WeatherIcon src="https://via.placeholder.com/50" alt="weather icon" />
      </div>
    </li>
  );
}

export default LocationListItem;
