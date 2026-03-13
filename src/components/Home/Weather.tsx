import Card from "../common/Card";
import Styles from "./Style.module.css";

const Weather = ({ loading, data }) => {
  if (loading) {
    return <p className={Styles.loading}>Loading data...</p>;
  }

  if (!data) {
    return null;
  }

  const { temp_c, humidity, wind_kph, condition } = data.current || {};

  const weatherItems = [
    { title: "Temperature", value: `${temp_c}°C` },
    { title: "Humidity", value: `${humidity}%` },
    { title: "Wind Speed", value: `${wind_kph} kph` },
    { title: "Condition", value: condition?.text },
  ];

  return (
    <div className={Styles.weatherCrd}>
      {weatherItems.map((item, index) => (
        <Card key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default Weather;
