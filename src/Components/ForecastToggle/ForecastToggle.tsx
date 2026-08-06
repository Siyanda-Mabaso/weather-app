import styles from "./ForecastToggle.module.css";

type ForecastToggleProps = {
  forecastType: string;
  setForecastType: (type: string) => void;
};

export const ForecastToggle = ({
  forecastType,
  setForecastType,
}: ForecastToggleProps) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={
          forecastType === "hourly"
            ? styles.activeButton
            : styles.toggleButton
        }
        onClick={() => setForecastType("hourly")}
      >
        Hourly
      </button>

      <button
        className={
          forecastType === "daily"
            ? styles.activeButton
            : styles.toggleButton
        }
        onClick={() => setForecastType("daily")}
      >
        Daily
      </button>
    </div>
  );
};