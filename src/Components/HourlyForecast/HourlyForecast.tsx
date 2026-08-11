import styles from './HourlyForecast.module.css'
export const HourlyForecast = () => {
  return (
    <section className={styles.hourlySection}>
      <h2>Hourly Forecast</h2>

      <div className={styles.hourlyContainer}>

        <div className={styles.hourlyCard}>
          <p>10 AM</p>
          <span>☀️</span>
          <strong>22°C</strong>
        </div>

        <div className={styles.hourlyCard}>
          <p>11 AM</p>
          <span>☀️</span>
          <strong>23°C</strong>
        </div>

        <div className={styles.hourlyCard}>
          <p>12 PM</p>
          <span>⛅</span>
          <strong>24°C</strong>
        </div>

        <div className={styles.hourlyCard}>
          <p>1 PM</p>
          <span>☀️</span>
          <strong>25°C</strong>
        </div>

        <div className={styles.hourlyCard}>
          <p>2 PM</p>
          <span>☀️</span>
          <strong>25°C</strong>
        </div>

      </div>
    </section>
  )
}
