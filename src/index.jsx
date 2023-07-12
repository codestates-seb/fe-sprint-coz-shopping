import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "app";
import GlobalStyle from "styles/global";
import { store } from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
