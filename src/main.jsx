import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "boxicons/css/boxicons.min.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);