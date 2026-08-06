import { useState } from "react";

import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { ForecastToggle } from "./Components/ForecastToggle/ForecastToggle";
import { HourlyForecast } from "./Components/HourlyForecast/HourlyForecast";
import { DailyForecast } from "./Components/DailyForecast/DailyForecast";

const App = () => {
  const [forecastType, setForecastType] = useState("hourly");

  return (
    <>
      <Header />
      <SearchBar />
      <CurrentWeather />

      <ForecastToggle
        forecastType={forecastType}
        setForecastType={setForecastType}
      />

      {forecastType === "hourly" && <HourlyForecast />}

      {forecastType === "daily" && <DailyForecast />}
    </>
  );
};

export default App;