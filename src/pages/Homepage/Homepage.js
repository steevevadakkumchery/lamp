import LocationListItem from "../../components/molecules/LocationListItem";
import WeatherSearchBar from "../../components/molecules/WeatherSearchBar";
import "./Homepage.css";

function Homepage() {
  return (
    <div class="page">
      <div class="section title">
        <h1>Weather Finder</h1>
      </div>

      <div class="section input">
        <WeatherSearchBar />
      </div>

      <div class="section locations">
        <h2 class="header">Locations</h2>
        <ul>
          <LocationListItem />
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
