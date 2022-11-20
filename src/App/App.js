import { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import UserPanel from "../components/UserPanel/UserPanel";
import { ReactComponent as IconMoon } from "../images/icon-moon.svg";
import { ReactComponent as IconSun } from "../images/icon-sun.svg";
import classes from "./App.module.css";
import defaultAvatarImage from "../images/defaultAvatar.png";
import { URL } from "../utilities/url";
import { useToggleTheme } from "../theme/useTheme";

function App() {
  const [data, setData] = useState({
    avatar_url: defaultAvatarImage,
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, at. Accusantium molestiae aperiam iure cum assumenda saepe deleniti! Magnam saepe vel consectetur delectus facilis labore nostrum nisi ratione, reprehenderit fugiat?",
    name: "The Octocat",
    html_url: "https://github.com/octocat",
    login: "octocat",
    created_at: "25 January 2011",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Fransisco, Usa",
    blog: "https://github.blog",
    company: "@github",
  });
  const { theme, toggleTheme } = useToggleTheme();

  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleButtonClick = async () => {
    if (searchValue) {
      const res = await fetch(`${URL}/${searchValue}`);
      if (res.ok) {
        const data = await res.json();
        setData(data);
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.appContainer}>
        <div className={classes.header}>
          <h1>devfinder</h1>
          <button className={classes.searchButton} onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
            {theme === "light" ? (
              <IconMoon className={classes.icon} />
            ) : (
              <IconSun className={classes.icon} />
            )}
          </button>
        </div>
        <SearchComponent
          value={searchValue}
          onChange={handleInputChange}
          onClick={handleButtonClick}
          error={error}
        />
        <UserPanel data={data} />
      </div>
    </div>
  );
}

export default App;
