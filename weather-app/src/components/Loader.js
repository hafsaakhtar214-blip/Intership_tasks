import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="loader">
      <FaSpinner className="spinner" />
      <p>Loading weather...</p>
    </div>
  );
}

export default Loader;