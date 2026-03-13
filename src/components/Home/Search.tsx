import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Styles from "./Style.module.css";

type Props = {
  onChange: () => void;
  onClick: () => void;
};

const Search = ({ onChange, onClick }: Props) => {
  return (
    <div className={Styles.container}>
      <Input onChange={onChange} placeholder="Enter city name" />
      <Button onClick={onClick} label="Search" />
    </div>
  );
};

export default Search;
