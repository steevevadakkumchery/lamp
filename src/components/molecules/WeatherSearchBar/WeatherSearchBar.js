import "./WeatherSearchBar.css";

function WeatherSearchBar() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input value="Paris" />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherSearchBar;
