import React from 'react'
import styles from './SaveLocation.module.css'

type SaveLocationProps={
  location: string;
}

export const SaveLocation = ({location}: SaveLocationProps) => {
  const saveLocation=() =>{
    localStorage.setItem('savedLocation',location)
    alert ('${location} has been saved!')
  }
  return (
    <div className={styles.saveContainer}>
      <button 
      className={styles.saveButton}
      onClick={saveLocation}>
        ⭐ Save Location
      </button>
    </div>
  )
}
