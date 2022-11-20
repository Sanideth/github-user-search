import SearchComponent from "../components/SearchComponent/SearchComponent";
import UserPanel from "../components/UserPanel/UserPanel";
import { ReactComponent as IconMoon } from "../images/icon-moon.svg";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.appContainer}>
        <div className={classes.header}>
          <h1>devfinder</h1>
          <button className={classes.searchButton}>
            Dark <IconMoon className={classes.icon} />
          </button>
        </div>
        <SearchComponent />
        <UserPanel />
      </div>
    </div>
  );
}

export default App;
