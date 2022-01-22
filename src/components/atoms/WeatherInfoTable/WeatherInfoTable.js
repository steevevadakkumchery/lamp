import "./WeatherInfoTable.css";

function WeatherInfoTable({ weatherInfo }) {
  const { air_pressure, humidity, max_temp, min_temp, predictability } =
    weatherInfo;
  return (
    <table>
      <tbody>
        <tr>
          <td>Air Pressure</td>
          <td>{air_pressure}pa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{humidity}%</td>
        </tr>
        <tr>
          <td>Highest Temperature</td>
          <td>
            {Math.round(max_temp)}
            <span dangerouslySetInnerHTML={{ __html: "&deg;" }} />
          </td>
        </tr>
        <tr>
          <td>Lowest Temperature</td>
          <td>
            {Math.round(min_temp)}
            <span dangerouslySetInnerHTML={{ __html: "&deg;" }} />
          </td>
        </tr>
        <tr>
          <td>Predictability</td>
          <td>{predictability}%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherInfoTable;
