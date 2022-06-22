import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Grades from 'pages/Grades';
import Login from 'pages/Login';
import Register from 'pages/Register';
import UserDetails from 'pages/UserDetails';
import NotFound from 'pages/NotFound';

import Navigation from 'components/Navigation';

import { UserProvider } from 'context/UserContext';

import './assets/css/main.scss';

const App = () => (
  <BrowserRouter>
    <UserProvider>
      <Navigation />
      <main className="container">
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/userdetails" exact component={UserDetails} />
          <Route path="/grades" exact component={Grades} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </UserProvider>
  </BrowserRouter>
);

export default App;
