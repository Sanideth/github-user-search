import classes from "./SearchComponent.module.css";
import { ReactComponent as IconSearch } from "../../images/icon-search.svg";
const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <IconSearch className={classes.icon} />
      <input type="text" className={classes.inputField} />
      <p className={classes.error}>No Result</p>
      <button className={classes.button}>Search</button>
    </div>
  );
};

export default SearchComponent;
