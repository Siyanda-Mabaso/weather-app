import styles from "./CurrentWeather.module.css";

type CurrentWeatherProps = {
  location: string;
  temperatureUnit: string;
  
};

export const CurrentWeather = ({
  location,
  temperatureUnit,
}: CurrentWeatherProps) => {
  return (
    <div className={styles.weatherCard}>

      <div className={styles.location}>
        <h2>{location}</h2>
        <p>South Africa</p>
      </div>

      <div className={styles.mainWeather}>
        <div className={styles.weatherIcon}>☀️</div>

        <div className={styles.temp}>
          <h1>
            {temperatureUnit === "celsius" ? "24°C" : "75°F"}
          </h1>

          <p>Sunny</p>
        </div>
      </div>

      <div className={styles.weatherDetails}>

        <div className={styles.details}>
          <span>💧</span>
          <p>Humidity</p>
          <strong>60%</strong>
        </div>

        <div className={styles.details}>
          <span>💨</span>
          <p>Wind</p>
          <strong>14 km/h</strong>
        </div>

      </div>

    </div>
  );
};