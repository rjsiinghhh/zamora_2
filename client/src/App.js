import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './components/Navigation/MainNavigation';
import Expenses from './finance/pages/Expenses'
import Schedule from './schedule/pages/Schedule'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/expenses" exact>
            <Expenses />
          </Route>
          <Route path="/schedule" exact>
            <Schedule />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;



// need to grab a new api key for the map
// d3, bootstrap table
// get the todo section in there 