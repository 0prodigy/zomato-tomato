import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./Routes/Main";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./Styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
