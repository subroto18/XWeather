import { useState, useCallback } from "react";

const useWeatherApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = useCallback(
    async (cityName: string) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          alert(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [API_KEY],
  );

  return { data, loading, error, fetchWeather };
};

export default useWeatherApi;
