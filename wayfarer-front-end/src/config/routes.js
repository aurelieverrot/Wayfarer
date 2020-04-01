import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

const Routes = () => {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup }/>
      </Switch>
    )
  }
  
  export default Routes;