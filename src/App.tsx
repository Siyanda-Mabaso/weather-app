import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { ForecastToggle } from "./Components/ForecastToggle/ForecastToggle";
import { HourlyForecast } from "./Components/HourlyForecast/HourlyForecast";
import { DailyForecast } from "./Components/DailyForecast/DailyForecast";
import { SaveLocation } from "./Components/SaveLocation/SaveLocation";
import { Settings } from "./Components/Settings/Settings";

import { searchLocation, getWeather } from "./API/weather";

const App = () => {
  const [forecastType, setForecastType] = useState("hourly");

  const [location, setLocation] = useState(
    localStorage.getItem("savedLocation") || "PMB"
  );

  const [temperatureUnit, setTemperatureUnit] = useState(
    localStorage.getItem("temperatureUnit") || "celsius"
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [weather, setWeather] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchValue: string) => {
    if (searchValue === "") {
      return;
    }

    setLoading(true);

    const locationData = await searchLocation(searchValue);

    if (!locationData) {
      setLoading(false);
      return;
    }

    const weatherData = await getWeather(
      locationData.latitude,
      locationData.longitude,
      temperatureUnit
    );

    setLocation(locationData.name);
    setWeather(weatherData);

    setLoading(false);
  };

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Header />

      <SearchBar
        location={location}
        handleSearch={handleSearch}
      />

      <CurrentWeather
        location={location}
        temperatureUnit={temperatureUnit}
        weather={weather}
        loading={loading}
      />

      <ForecastToggle
        forecastType={forecastType}
        setForecastType={setForecastType}
      />

      {forecastType === "hourly" && (
        <HourlyForecast
          weather={weather}
          temperatureUnit={temperatureUnit}
        />
      )}

      {forecastType === "daily" && (
        <DailyForecast
          weather={weather}
          temperatureUnit={temperatureUnit}
        />
      )}

      <SaveLocation
        location={location}
      />

      <Settings
        theme={theme}
        setTheme={setTheme}
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />
    </div>
  );
};

export default App;