import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Room from './Views/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
        <Route exact path='/rooms' render={props => <Room {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
