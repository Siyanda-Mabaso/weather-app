<img src="https://socialify.git.ci/Siyanda-Mabaso/weather-app/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="weather-app" width="640" height="320" />
# 🌤️ Weather App
A responsive weather application built with React and TypeScript. 
The app allows users to search for a city and view current weather
conditions, hourly forecasts, and daily forecasts.

## ✨ Features

- 🔎 Search for weather by city
- 🌡️ View current temperature
- 💧 View humidity
- 💨 View wind speed
- 🌦️ Weather condition descriptions and icons
- 🕐 Hourly weather forecast
- 📅 Daily weather forecast
- ⭐ Save a location
- ⚙️ Change temperature units
- 🎨 Light and dark theme settings
- 📱 Responsive user interface

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- CSS Modules
- Weather API
- JavaScript / TypeScript

## 📁 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── API/
│   │   └── weather.ts
│   │
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── CurrentWeather/
│   │   ├── DailyForecast/
│   │   ├── ForecastToggle/
│   │   ├── Header/
│   │   ├── HourlyForecast/
│   │   ├── SaveLocation/
│   │   ├── SearchBar/
│   │   └── Settings/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
└── vite.config.ts

🚀 Getting Started
1. Clone the repository
git clone <your-repository-url>

2. Navigate to the project
cd weather-app

3. Install dependencies
npm install

4. Start the development server
npm run dev

The application will be available at:

http://localhost:5173

📖 How to Use
Enter a city name in the search bar.

Click Search.

View the current weather conditions.

Use Hourly or Daily to switch between forecasts.

Click Save Location to save a preferred location.

Use Settings to change the temperature unit or theme.

🌡️ Weather Information
The application displays information such as:

Temperature

Humidity

Wind speed

Weather conditions

Weather icons

Hourly forecast

Daily forecast

🎨 Settings
The settings section allows users to customise the application.

Temperature Unit
Celsius (°C)

Other supported units, if configured

Theme
Light

Dark