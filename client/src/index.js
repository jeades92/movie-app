import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Here we import bootstrap for access to some additional styling
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
