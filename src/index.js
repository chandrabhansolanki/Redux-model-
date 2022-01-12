import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
