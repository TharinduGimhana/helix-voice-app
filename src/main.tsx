import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import "@fontsource/montserrat"; // Defaults to 400 weight
import "@fontsource/montserrat/400.css"; // Specific weight
import "@fontsource/montserrat/700.css"; // Bold weight


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
