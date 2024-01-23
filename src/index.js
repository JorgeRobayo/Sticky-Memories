import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./pages/App/App";
import { ImgProvider } from "./context/ImgContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ImgProvider>
      <Router>
        <App />
      </Router>
    </ImgProvider>
  </React.StrictMode>
);
