import React from 'react';
import WhatsForLunch from './components/WhatsForLunch';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WhatsForLunch />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
