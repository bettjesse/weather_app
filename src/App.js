import React, { useState } from "react";
import Search from "./components/Search";
import Current_weather from "./components/Current_weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const asyncFetch = async () => {
      const [lat, lon] = searchData.value.split(" ");

      const currentWeatherFetch = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const response = await Promise.all([currentWeatherFetch, forecastFetch]);
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city:searchData.label, ...weatherResponse });
      setForecast({ city:searchData.label, ...forecastResponse });
    };
    asyncFetch();
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="my-[20px] mx-[auto] max-w-[1080px]">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Current_weather data={currentWeather} />}
    </div>
  );
};
export default App;
