import classes from "./SearchComponent.module.css";
import { ReactComponent as IconSearch } from "../../images/icon-search.svg";
const SearchComponent = ({ value, onChange, onClick, error }) => {
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className={classes.searchComponent}>
      <IconSearch className={classes.icon} />
      <input
        type="text"
        className={classes.inputField}
        value={value}
        onChange={onChange}
        onKeyDown={handleEnterKeyDown}
      />
      {error && <p className={classes.error}>No Result</p>}
      <button className={classes.button} onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
