// import React from 'react'
import { Header } from './Components/Header/Header';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { ForecastToggle

 } from './Components/ForecastToggle/ForecastToggle';
export const App = () => {
  return (
  <>

    <Header/>
    <SearchBar/>
    <CurrentWeather/>
    <ForecastToggle/>
      </>
  )
}
export default App;


