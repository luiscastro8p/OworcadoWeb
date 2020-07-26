import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Room from './Views/Room';
import RoomID from './Views/RoomID';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/rooms" render={(props) => <Room {...props} />} />
        <Route
          exact
          path="/rooms/:id"
          render={(props) => <RoomID {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
