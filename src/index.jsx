import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./assets/index.css";

import App from "./App";

import { store } from "./store";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
