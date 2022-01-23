import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PageContainer from "../../components/atoms/PageContainer";
import Header from "../../components/atoms/Header";
import CurrentWeather from "../../components/molecules/CurrentWeather";
import LoadingSpinner from "../../components/atoms/LoadingSpinner";
import WeekForecast from "../../components/molecules/WeekForecast";
import WeatherInfoTable from "../../components/atoms/WeatherInfoTable";

import { getCityDataDeep } from "../../api/weatherapi";

function Details() {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState({});
  const [selectedDay, setSelectedDay] = useState({});

  useEffect(() => {
    getWeatherData();
    return () => {
      setSelectedDay({});
    };
  }, []);

  const getWeatherData = async () => {
    const weatherDataResponse = await getCityDataDeep(id);
    setWeatherData(weatherDataResponse);
    setSelectedDay(weatherDataResponse.consolidated_weather[0]);
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

  const handleDaySelect = (day) => {
    setSelectedDay(weatherData.consolidated_weather[day]);
  };

  return (
    <PageContainer>
      <div data-testid="details">
        <Header />
      </div>
      {woeid ? (
        <>
          <div data-testid="current-weather">
            <CurrentWeather {...currentWeatherProps()} />
          </div>
          <div>
            <WeekForecast
              weekData={weatherData.consolidated_weather}
              handleDaySelect={handleDaySelect}
            />
          </div>
          <div>
            <div>Date: {selectedDay.applicable_date}</div>
            <WeatherInfoTable weatherInfo={selectedDay} />
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
}

export default Details;
