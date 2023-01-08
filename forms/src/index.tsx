import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./data/i18n/i18n";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { UserProvider } from "./context/userContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  </BrowserRouter>
);
