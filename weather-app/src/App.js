import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [time, setTime] = useState(new Date());

  const API_KEY = "0ffdda7788f7422d9b502121262807";

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      );

      setWeather(res.data);
    } catch (err) {
      setWeather(null);

      if (err.response?.data?.error?.message) {
        setError(err.response.data.error.message);
      } else {
        setError("Unable to fetch weather.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <header className="header">
          <div>
            <h1 className="title">Aurora Weather</h1>
            <p className="subtitle">
              {time.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="clock">
            {time.toLocaleTimeString()}
          </div>
        </header>

        <SearchBar search={getWeather} />

        {loading && <Loader />}

        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard weather={weather} />}

        {!weather && !loading && !error && (
          <div className="welcome">
            <h2>🌤 Search Any City</h2>
            <p>
              Check temperature, humidity,
              wind speed, sunrise, sunset
              and much more.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;