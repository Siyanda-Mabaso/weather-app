import styles from "./DailyForecast.module.css";

type DailyForecastProps = {
  weather: any;
  temperatureUnit: string;
};

export const DailyForecast = ({
  weather,
  temperatureUnit,
}: DailyForecastProps) => {

  if (!weather || !weather.daily) {
    return null;
  }

  const days = weather.daily.time;
  const temperatures = weather.daily.temperature_2m_max;
  const weatherCodes = weather.daily.weather_code;

  const getWeatherDescription = (code: number) => {
    if (code === 0) return "Sunny";
    if (code <= 3) return "Partly Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rainy";
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
    <section className={styles.dailySection}>
      <h2>Daily Forecast</h2>

      <div className={styles.dailyContainer}>

        {days.map((day: string, index: number) => {

          const date = new Date(day);

          const dayName = date.toLocaleDateString("en-US", {
            weekday: "long",
          });

          return (
            <div className={styles.dailyCard} key={day}>

              <p>{dayName}</p>

              <span>
                {getWeatherIcon(weatherCodes[index])}
              </span>

              <strong>
                {Math.round(temperatures[index])}
                {temperatureUnit === "celsius" ? "°C" : "°F"}
              </strong>

              <h6>
                {getWeatherDescription(weatherCodes[index])}
              </h6>

            </div>
          );
        })}

      </div>
    </section>
  );
};