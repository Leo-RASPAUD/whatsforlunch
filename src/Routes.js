import React from 'react';
import WhatsForLunch from './components/WhatsForLunch';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WhatsForLunch />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
