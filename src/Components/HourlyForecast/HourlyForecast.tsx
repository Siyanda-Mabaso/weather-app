import styles from "./HourlyForecast.module.css";

type HourlyForecastProps = {
  weather: any;
  temperatureUnit: string;
};

export const HourlyForecast = ({
  weather,
  temperatureUnit,
}: HourlyForecastProps) => {

  if (!weather || !weather.hourly) {
    return null;
  }

  const times = weather.hourly.time;
  const temperatures = weather.hourly.temperature_2m;

  return (
    <section className={styles.hourlySection}>
      <h2>Hourly Forecast</h2>

      <div className={styles.hourlyContainer}>

        {times.slice(0, 5).map((time: string, index: number) => (
          <div className={styles.hourlyCard} key={time}>

            <p>
              {new Date(time).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>

            <span>☀️</span>

            <strong>
              {Math.round(temperatures[index])}
              {temperatureUnit === "celsius" ? "°C" : "°F"}
            </strong>

          </div>
        ))}

      </div>
    </section>
  );
};