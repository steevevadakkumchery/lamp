import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PageContainer from "../../components/atoms/PageContainer";
import Header from "../../components/atoms/Header";
import CurrentWeather from "../../components/molecules/CurrentWeather";
import { getCityDataDeep } from "../../api/weatherapi";

function Details() {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const weatherDataResponse = await getCityDataDeep(id);
    console.log(weatherDataResponse);
    setWeatherData(weatherDataResponse);
  };

  const woeid = weatherData.woeid;
  const currentWeatherProps = () => {
    if (!woeid) return {};

    return {
      weatherToday: weatherData.consolidated_weather?.[0],
      city: weatherData.title,
      country: weatherData.parent.title,
    };
  };
  return (
    <PageContainer>
      <div>
        <Header />
      </div>
      <div>{woeid && <CurrentWeather {...currentWeatherProps()} />}</div>
    </PageContainer>
  );
}

export default Details;
