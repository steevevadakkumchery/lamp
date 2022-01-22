import "./LocationListItem.css";
import WeatherIcon from "../../atoms/WeatherIcon";
function LocationListItem() {
  return (
    <li>
      <div class="location-item">
        <div>
          <span>London</span>
          <span>See more</span>
        </div>
        <WeatherIcon src="https://via.placeholder.com/50" alt="weather icon" />
      </div>
    </li>
  );
}

export default LocationListItem;
