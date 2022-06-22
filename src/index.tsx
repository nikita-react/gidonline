import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store/index";
import "./style.css";
const Main: React.FC<{}> = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<Main />, document.getElementById("root"));
