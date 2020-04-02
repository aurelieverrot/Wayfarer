import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';

export default (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/profile' component={ Profile } />
        <Route path='/login' component={ Login } />
        <Route path='/signup' component={ Signup }/>
      </Switch>
);