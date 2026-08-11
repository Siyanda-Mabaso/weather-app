import React from 'react'
import styles from './SaveLocation.module.css'

export const SaveLocation = () => {
  return (
    <div className={styles.saveContainer}>
      <button className={styles.saveButton}>
        ⭐ Save Location
      </button>
    </div>
  )
}
