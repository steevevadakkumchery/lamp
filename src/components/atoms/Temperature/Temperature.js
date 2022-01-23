import "./Temperature.css";

function Temperature({ temperature, type }) {
  return (
    <span data-testid="temperature" className={`temperature-${type}`}>
      {Math.round(temperature)}
      <span className="deg" dangerouslySetInnerHTML={{ __html: "&deg;" }} />
    </span>
  );
}

export default Temperature;
