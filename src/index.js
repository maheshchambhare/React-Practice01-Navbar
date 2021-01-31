import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";

ReactDOM.render(
  // ! Fragments let you group components
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
