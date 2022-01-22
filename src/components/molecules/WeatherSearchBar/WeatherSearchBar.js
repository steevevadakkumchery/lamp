import "./WeatherSearchBar.css";

function WeatherSearchBar({ value, handleChange, handleSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherSearchBar;
