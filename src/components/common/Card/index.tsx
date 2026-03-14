import Style from "./Card.module.css";
type Props = {
  title: string;
  value: string;
};
const index = ({ title, value }: Props) => {
  return (
    <div className={`${Style.container} weather-card`}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default index;
