import { useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function SearchBar({ search }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    search(city);
  };

  return (
    <motion.form
      className="search-form"
      onSubmit={handleSubmit}
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search any city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        Search
        <FaArrowRight style={{ marginLeft: 10 }} />
      </motion.button>
    </motion.form>
  );
}

export default SearchBar;