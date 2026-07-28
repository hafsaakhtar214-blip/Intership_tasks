import { motion } from "framer-motion";
import {
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";

import {
  FaWind,
  FaEye,
  FaTemperatureHigh,
  FaMapMarkerAlt,
  FaTint,
  FaCloudSun,
} from "react-icons/fa";

function WeatherCard({ weather }) {
  const current = weather.current;
  const location = weather.location;
  const forecast = weather.forecast.forecastday[0];

  const cards = [
    {
      icon: <WiHumidity />,
      title: "Humidity",
      value: `${current.humidity}%`,
    },
    {
      icon: <FaWind />,
      title: "Wind",
      value: `${current.wind_kph} km/h`,
    },
    {
      icon: <WiThermometer />,
      title: "Feels Like",
      value: `${Math.round(current.feelslike_c)}°C`,
    },
    {
      icon: <FaEye />,
      title: "Visibility",
      value: `${current.vis_km} km`,
    },
    {
      icon: <WiSunrise />,
      title: "Sunrise",
      value: forecast.astro.sunrise,
    },
    {
      icon: <WiSunset />,
      title: "Sunset",
      value: forecast.astro.sunset,
    },
    {
      icon: <FaTint />,
      title: "Pressure",
      value: `${current.pressure_mb} mb`,
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Max Temp",
      value: `${Math.round(forecast.day.maxtemp_c)}°C`,
    },
  ];

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="left-panel">

        <motion.img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <h1>{Math.round(current.temp_c)}°</h1>

        <h3>{current.condition.text}</h3>

        <h2>
          <FaMapMarkerAlt />
          {" "}
          {location.name}, {location.country}
        </h2>

      </div>

      <div className="right-panel">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            className="mini-card"
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
          >
            <div className="card-icon">
              {card.icon}
            </div>

            <div className="card-content">

              <span>{card.title}</span>

              <h4>{card.value}</h4>

            </div>

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}

export default WeatherCard;