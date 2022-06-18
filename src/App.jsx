import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';
import Grades from 'pages/Grades';
import Login from 'pages/Login';
import Register from 'pages/Register';
import UserDetails from 'pages/UserDetails';
import Navigation from 'components/Navigation';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/userdetails" exact component={UserDetails} />
      <Route path="/grades" exact component={Grades} />
      <Route path="/calendar" exact component={Calendar} />
      {/* Add one for 404 page */}
    </Switch>
  </BrowserRouter>
);

export default App;
