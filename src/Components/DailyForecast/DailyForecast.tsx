import React from 'react'
import styles from './DailyForecast.module.css'


export const DailyForecast = () => {
  return (
     <section className={styles.dailySection}>
      <h2>Daily Forecast</h2>

      <div className={styles.dailyContainer}>

        <div className={styles.dailyCard}>
          <p>Monday</p>
          <span>☀️</span>
          <strong>24°C</strong>
         <h6>Sunny</h6>
        </div>

        <div className={styles.dailyCard}>
          <p>Tuesday</p>
          <span>🌧️</span>
          <strong>20°C</strong>
          <h6>Rainy</h6>
        </div>

        <div className={styles.dailyCard}>
          <p>Wednesday</p>
          <span>⛅</span>
          <strong>22°C</strong>
          <h6>Partly Cloudy</h6>
        </div>

        <div className={styles.dailyCard}>
          <p>Thursday</p>
          <span>☀️</span>
          <strong>25°C</strong>
          <h6>Sunny</h6>
        </div>

        <div className={styles.dailyCard}>
          <p>Friday</p>
          <span>🌤️</span>
          <strong>23°C</strong>
          <h6>Mostly Sunny</h6>
        </div>

      </div>
    </section>
  )
}
