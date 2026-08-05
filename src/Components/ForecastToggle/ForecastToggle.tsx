import React from 'react'
import styles from './ForecastToggle.module.css'

export const ForecastToggle = () => {
  return (
    <div className={styles.toggleContainer}>

        <button className={styles.activeButton}>
            Hourly
        </button>

        <button className={styles.toggle_Btn}>
            Daily
        </button>

    </div>
  )
}

