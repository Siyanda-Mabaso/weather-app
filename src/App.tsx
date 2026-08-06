// import React from 'react'
import { Header } from './Components/Header/Header';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { ForecastToggle } from './Components/ForecastToggle/ForecastToggle';
import { HourlyForecast } from './Components/HourlyForecast/HourlyForecast';

export const App = () => {
  return (
  <>

    <Header/>
    <SearchBar/>
    <CurrentWeather/>
    <ForecastToggle/>
    <HourlyForecast/>
      </>
  )
}
export default App;


