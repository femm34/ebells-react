import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login/Login";
export default function Router() {
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={login} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
      {/* Agrega más rutas según sea necesario */}
    </Switch>
  </BrowserRouter>;
}
