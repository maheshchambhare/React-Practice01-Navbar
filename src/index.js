import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
ReactDOM.render(
  // ! Fragments let you group components
  <>
    <Header />,
    <App />,
  </>,
  document.getElementById("root")
);
