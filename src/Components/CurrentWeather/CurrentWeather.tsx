import styles from './CurrentWeather.module.css'

export const CurrentWeather = () => {
  return (
    <div className={styles.weatherCard}>

        <div className={styles.location}>
            <h2>PMB</h2>
            <p>South Africa</p>
        </div>

        <div className={styles.mainWeather}>
            <div className={styles.weatherIcon} >☀️</div>

            <div className={styles.temp}>
                <h1>24°C</h1>
                <p>Sunny</p>
            </div>
        </div>

        <div className={styles.weatherDetails}>

            <div className={styles.details}>
            <span>💦</span>
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
  )
}
