import classes from "./SearchComponent.module.css";
import { ReactComponent as IconSearch } from "../../images/icon-search.svg";
const SearchComponent = () => {
  return (
    <div className={classes.searchComponent}>
      <IconSearch className={classes.icon} />
      <input type="text" className={classes.inputField} />
      <button className={classes.button}>Search</button>
    </div>
  );
};

export default SearchComponent;
