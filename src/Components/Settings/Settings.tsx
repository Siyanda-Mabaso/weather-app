// import { useState } from 'react'
import styles from './Settings.module.css'
type SettingsProps={
  theme: string;
  setTheme: (theme: string) => void;
  temperatureUnit: string;
  setTemperatureUnit: (unit: string) => void;
}

export const Settings = ({
  theme,
  setTheme,
  temperatureUnit,
  setTemperatureUnit
}: SettingsProps) => {

// // Temp unit state
//     const [temperatureUnit, setTemperatureUnit] = useState(
//         localStorage.getItem('temperatureUnit') || 'celsius'
//     )
// temp function
    const handleTemperatureChange=(
        event: React.ChangeEvent<HTMLSelectElement>
    ) =>{
        const unit = event.target.value;
        
        setTemperatureUnit(unit)
        localStorage.setItem('temperatureUnit',unit)
    }
    // theme state
    //  const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') || 'light'
    // )
    // theme function
     const handleThemeChange=(
        event: React.ChangeEvent<HTMLSelectElement>
    ) =>{
        const selectedTheme = event.target.value;
        
        setTheme(selectedTheme)
        localStorage.setItem('theme',selectedTheme)
    }

    
  return (
    <section className={styles.settingsContainer}>
      <h2>Settings</h2>
{/* Temperature Unit */}
      <div className={styles.settingItem}>
        <label htmlFor="temperatureUnit">
          Temperature Unit
        </label>

        <select 
        id="temperatureUnit"
         className={styles.select}
         value={temperatureUnit}
         onChange={handleTemperatureChange}>
          <option value="celsius">Celsius (°C)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
        </select>
      </div>
{/* Theme */}
      <div className={styles.settingItem}>
        <label htmlFor="theme">
          Theme
        </label>

        <select id="theme" 
        className={styles.select}
        value={theme}
        onChange={handleThemeChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </section>
  )
}
