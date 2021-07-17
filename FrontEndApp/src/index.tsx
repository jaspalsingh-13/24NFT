import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RootStore } from "./modules/shared/stores";
import { Provider } from "mobx-react";
import reportWebVitals from "./reportWebVitals";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
