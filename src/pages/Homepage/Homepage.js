import { useState, useEffect } from "react";
import LocationListItem from "../../components/molecules/LocationListItem";
import WeatherSearchBar from "../../components/molecules/WeatherSearchBar";
import {
  getCitiesDataAll,
  getInitialCitiesDataAll,
} from "../../api/weatherapi";
import "./Homepage.css";

const DEFAULT_CITY_LIST = ["london", "paris", "sydney"];

function Homepage() {
  const [searchValue, setSeachValue] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInitialData();
    setLoading(true);
  }, []);

  const getInitialData = async () => {
    const cityDataRes = await getInitialCitiesDataAll(DEFAULT_CITY_LIST);
    setCities(cityDataRes);
    setLoading(false);
  };

  const getSearchData = async (city) => {
    setLoading(true);
    const citiesData = await getCitiesDataAll(city);
    setCities(citiesData);
    setLoading(false);
  };

  const handleSearchTextChange = (e) => {
    setSeachValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue) {
      getSearchData(searchValue);
    } else {
      setCities([]);
    }
  };

  return (
    <div className="page">
      <div className="section title">
        <h1>Weather Finder</h1>
      </div>

      <div className="section input">
        <WeatherSearchBar
          value={searchValue}
          handleChange={handleSearchTextChange}
          handleSearch={handleSearch}
        />
      </div>

      <div className="section locations">
        <h2 className="header">Locations</h2>
        {loading ? (
          <h1>Loading . . .</h1>
        ) : (
          <ul>
            {cities.map(({ title, woeid }) => {
              return <LocationListItem key={woeid} name={title} id={woeid} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Homepage;
