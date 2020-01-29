import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Home from "../../pages/home";
import Cart from "../../pages/cart";

//Components
import Header from "../header";

const GeneralRoutes: React.SFC = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route component={Home} path={"/"} exact />
      <Route component={Cart} path={"/cart"} exact />
    </Switch>
  </React.Fragment>
);

const AppPresenter: React.SFC = () => <GeneralRoutes />;

export default AppPresenter;
