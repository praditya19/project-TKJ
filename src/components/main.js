import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Inputan from "./inputan";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/inputan" component={Inputan} />
  </Switch>
);
export default Main;
