import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme/useTheme";
import App from "./App/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
