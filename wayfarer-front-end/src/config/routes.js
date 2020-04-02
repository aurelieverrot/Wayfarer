import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/profile' component={ Profile } />
      <Route path='/login' render={() => (<Login loggedIn={props.loggedIn}/>)} />
      <Route path='/signup' render={() => (<Signup loggedIn={props.loggedIn}/>)}/>
    </Switch>
  );
}

export default Routes;
