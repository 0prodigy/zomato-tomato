import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./Routes/Main";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import "./Styles/index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
