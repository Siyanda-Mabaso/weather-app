import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { ForecastToggle } from './Components/ForecastToggle/ForecastToggle';
import { HourlyForecast } from './Components/HourlyForecast/HourlyForecast';
import { DailyForecast } from './Components/DailyForecast/DailyForecast';
import { SaveLocation } from './Components/SaveLocation/SaveLocation';
import { Settings } from './Components/Settings/Settings';

const App = () => {
const [forecastType, setForecastType] = useState('hourly');

const [location, setLocation] = useState(
localStorage.getItem('savedLocation') || 'PMB'
);

return (
<>
<Header />

<SearchBar
location={location}
setLocation={setLocation}
/>
<p> Current location:{location}</p>

<CurrentWeather />

<ForecastToggle
forecastType={forecastType}
setForecastType={setForecastType}
/>

{forecastType === 'hourly' && <HourlyForecast />}

{forecastType === 'daily' && <DailyForecast />}

<SaveLocation location={location} />

<Settings />
</>
);
};

export default App;
