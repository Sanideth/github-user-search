import { createContext, useContext, useEffect, useState } from "react";

const useTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(prefersDark ? "dark" : "light");

  useEffect(() => {
    switch (theme) {
      case "light": {
        document.documentElement.style.setProperty(
          "--background-color",
          "#fff"
        );
        document.documentElement.style.setProperty(
          "--backgroundSecondary-color",
          "#F6F8FF"
        );
        document.documentElement.style.setProperty(
          "--heading-color",
          "#2B3442"
        );
        document.documentElement.style.setProperty("--font-color", "#4B6A9B");
        document.documentElement.style.setProperty("--button-color", "#697c9a");
        break;
      }
      case "dark": {
        document.documentElement.style.setProperty(
          "--background-color",
          "#1E2A47"
        );
        document.documentElement.style.setProperty(
          "--backgroundSecondary-color",
          "#141D2F"
        );
        document.documentElement.style.setProperty("--heading-color", "#fff");
        document.documentElement.style.setProperty("--font-color", "#fff");
        document.documentElement.style.setProperty("--button-color", "#fff");
        break;
      }
      default: {
        break;
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

const themeContext = createContext(() => {});

export const ThemeProvider = (props) => {
  const toggleTheme = useTheme();

  return (
    <themeContext.Provider value={toggleTheme}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useToggleTheme = () => useContext(themeContext);
