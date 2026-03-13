import { useState } from "react";
import useWeatherApi from "../../hooks/useWeather";
import Layout from "../common/Layout";
import Search from "./Search";
import Weather from "./Weather";
const Index = () => {
  const { data, loading, error, fetchWeather } = useWeatherApi();
  const [search, setSearch] = useState("");

  const handleWeatherData = () => {
    fetchWeather(search);
  };

  return (
    <Layout>
      <Search
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleWeatherData}
      />

      {!error && <Weather loading={loading} data={data} />}
    </Layout>
  );
};

export default Index;
