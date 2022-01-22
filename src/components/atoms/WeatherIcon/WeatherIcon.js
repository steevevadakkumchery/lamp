import "./WeatherIcon.css";

const ICONS = {
  sn: "&#127784;",
  sl: "&#127784;",
  h: "&#127784;",
  t: "&#127785;",
  hr: "&#9748;",
  lr: "&#127783;",
  s: "&#127782;",
  hc: "&#127785;",
  lc: "&#127781;",
  c: "&#127774;",
};
function WeatherIcon({ weatherState }) {
  return (
    <span
      className="weather-icon"
      dangerouslySetInnerHTML={{ __html: ICONS[weatherState] }}
    />
  );
}

export default WeatherIcon;
