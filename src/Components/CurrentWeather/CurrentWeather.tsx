import styles from "./CurrentWeather.module.css";

type CurrentWeatherProps = {
  location: string;
  temperatureUnit: string;
  weather: any;
  loading: boolean;
};

export const CurrentWeather = ({
  location,
  temperatureUnit,
  weather,
  loading,
}: CurrentWeatherProps) => {

  if (loading) {
    return (
      <div className={styles.weatherCard}>
        <h2>Loading weather...</h2>
        <p>Please wait while we get the latest weather.</p>
      </div>
    );
  }

  if (!weather || !weather.current) {
    return (
      <div className={styles.weatherCard}>
        <h2>{location}</h2>
        <p>Search for a city to view the weather.</p>
      </div>
    );
  }

  const temperature = Math.round(
    weather.current.temperature_2m
  ); 
  const humidity = weather.current.relative_humidity_2m;

  const windSpeed = weather.current.wind_speed_10m;

  const weatherCode = weather.current.weather_code;

  const getWeatherDescription = (code: number) => {
    if (code === 0) return "Sunny";
    if (code <= 3) return "Partly Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rain Showers";
    if (code <= 99) return "Thunderstorm";

    return "Unknown";
  };

  const getWeatherIcon = (code: number) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "🌤️";
    if (code <= 48) return "🌫️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    if (code <= 82) return "🌦️";
    if (code <= 99) return "⛈️";

    return "🌤️";
  };

  return (
    <div className={styles.weatherCard}>

      <div className={styles.location}>
        <h2>{location}</h2>
        <p>South Africa</p>
      </div>

      <div className={styles.mainWeather}>

        <div className={styles.weatherIcon}>
          {getWeatherIcon(weatherCode)}
        </div>

        <div className={styles.temp}>

          <h1>
            {temperature}
            {temperatureUnit === "celsius" ? "°C" : "°F"}
          </h1>

          <p>
            {getWeatherDescription(weatherCode)}
          </p>

        </div>

      </div>

      <div className={styles.weatherDetails}>

        <div className={styles.details}>
          <span>💧</span>
          <p>Humidity</p>
          <strong>{humidity}%</strong>
        </div>

        <div className={styles.details}>
          <span>💨</span>
          <p>Wind</p>
          <strong>{windSpeed} km/h</strong>
        </div>

      </div>

    </div>
  );
};