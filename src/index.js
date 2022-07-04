import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
