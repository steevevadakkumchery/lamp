import { useState } from "react";
import Temperature from "../../atoms/Temperature";
import WeatherIcon from "../../atoms/WeatherIcon";
import "./WeekForecast.css";

function getDay(date) {
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObj = new Date(date);
  return daysOfTheWeek[dateObj.getDay()];
}

function WeekForecast({ weekData, handleDaySelect }) {
  return (
    <div className="week-table">
      {weekData.map(({ id, applicable_date }) => (
        <div key={id}>{getDay(applicable_date)}</div>
      ))}
      {weekData.map(({ id, weather_state_abbr }, index) => (
        <div
          key={id}
          data-testid={`day-${index}`}
          onClick={() => {
            handleDaySelect(index);
          }}
        >
          <WeatherIcon weatherState={weather_state_abbr} type="medium" />
        </div>
      ))}
      {weekData.map(({ id, the_temp }) => (
        <div key={id}>
          <b>
            <Temperature temperature={the_temp} type="small" />
          </b>
        </div>
      ))}
      {weekData.map(({ id, predictability }) => (
        <div key={id}>
          <span>{predictability}%</span>
        </div>
      ))}
    </div>
  );
}

export default WeekForecast;
