export type LocationResult = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

export type WeatherData = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
};

export const searchLocation = async (
  location: string
): Promise<LocationResult | null> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      location
    )}&count=1&language=en&format=json`
  );

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return data.results[0];
};

export const getWeather = async (
  latitude: number,
  longitude: number,
  temperatureUnit: string
): Promise<WeatherData> => {
  const unit =
    temperatureUnit === "fahrenheit" ? "fahrenheit" : "celsius";

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=${unit}&wind_speed_unit=kmh`
  );

  return await response.json();
};