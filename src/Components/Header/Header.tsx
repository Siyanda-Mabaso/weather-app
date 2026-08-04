import React from 'react'
import styles from './Header.module.css'
import sun from '../assets/200.png'
import icon from '../assets/100.png'

export const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.img} src={sun} alt="sun" />
        <h2 className={styles.weather}>Weather App</h2>
            <img className={styles.img2} src={icon} alt="icon" />
        
    </div>
  )
}
