import React from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';

const Routes = (props) => {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  console.log(props)
  console.log(isEmpty(props.user))
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ Profile } />
      <Route path='/profile' render={() => (!isEmpty(props.user) ? (<Profile currentUser={props.user}/>) : (<Redirect to="/signup"/>))}/>
      <Route path='/login' render={() => (isEmpty(props.user) ? (<Login loggedIn={props.loggedIn}/>) : (<Redirect to="/profile"/>))} />
      <Route path='/signup' render={() => (isEmpty(props.user) ? (<Signup loggedIn={props.loggedIn}/>) : (<Redirect to="/profile"/>))}/>
    </Switch>
  );
}

export default Routes;
