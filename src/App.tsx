import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { ForecastToggle } from "./Components/ForecastToggle/ForecastToggle";
import { HourlyForecast } from "./Components/HourlyForecast/HourlyForecast";
import { DailyForecast } from "./Components/DailyForecast/DailyForecast";
import { SaveLocation } from "./Components/SaveLocation/SaveLocation";
import { Settings } from "./Components/Settings/Settings";
import { searchLocation,getWeather } from "./API/weather";

const App = () => {
// Forecast type
const [forecastType, setForecastType] = useState("hourly");

// Location
const [location, setLocation] = useState(
localStorage.getItem("savedLocation") || "PMB"
);

// Theme
const [theme, setTheme] = useState(
localStorage.getItem("theme") || "light"
);

//Temperature Unit
const [temperatureUnit, setTemperatureUnit] = useState(
localStorage.getItem("temperatureUnit") || "celsius"
);

const [weatherData, setWeatherData] = useState<any>(null);

const handleSearch = async (searchValue: string) => {
if (searchValue === "") {
  return;
} 


const locationData = await searchLocation(searchValue);

if(!locationData) {
  alert("Location not found");
  return;
}

const weatherData = await getWeather(
  locationData.latitude,
  locationData.longitude,
  temperatureUnit
);

console.log("Weather Data:", weatherData);

setWeatherData(weatherData);

setLocation(locationData.name);
}
return (
<div className={theme === "dark" ? "dark" : "light"}>
<Header />

<SearchBar
location={location}
handleSearch={handleSearch}
/>

<CurrentWeather
  location={location} 
temperatureUnit={temperatureUnit} />

<ForecastToggle
forecastType={forecastType}
setForecastType={setForecastType}
/>
{forecastType === "hourly" && <HourlyForecast />}

{forecastType === "daily" && <DailyForecast />}

<SaveLocation location={location} />

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