import React, { useContext } from "react";
import GetLocation from "./components/GetLocation";
import WhatsForLunch from "./components/WhatsForLunch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import context from "./context";

export default function App() {
  const {
    state: { coordinates }
  } = useContext(context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GetLocation />
        </Route>
        {coordinates && (
          <Route exact path="/lunch">
            <WhatsForLunch />
          </Route>
        )}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
