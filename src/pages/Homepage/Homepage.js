import { useState, useEffect } from "react";

import PageContainer from "../../components/atoms/PageContainer";
import Header from "../../components/atoms/Header";
import LocationListItem from "../../components/molecules/LocationListItem";
import WeatherSearchBar from "../../components/molecules/WeatherSearchBar";
import LoadingSpinner from "../../components/atoms/LoadingSpinner";
import ListItemContainer from "../../components/atoms/ListItemContainer";
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

  const cityList = cities.length ? (
    cities.map((cityData) => {
      if (!cityData.hasOwnProperty("woeid")) return;
      return <LocationListItem key={cityData.woeid} {...cityData} />;
    })
  ) : (
    <ListItemContainer>No cities found!</ListItemContainer>
  );

  return (
    <PageContainer>
      <div>
        <Header />
      </div>

      <div>
        <WeatherSearchBar
          value={searchValue}
          handleChange={handleSearchTextChange}
          handleSearch={handleSearch}
        />
      </div>

      <div className="locations">
        <h2 className="header">Locations</h2>
        {loading ? <LoadingSpinner /> : <ul>{cityList}</ul>}
      </div>
    </PageContainer>
  );
}

export default Homepage;
