import React from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';
import CityContainer from '../containers/CityContainer/CityContainer';

const Routes = (props) => {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route 
        path='/profile' 
        render={() => 
          (!isEmpty(props.user) ? (<Profile currentUser={props.user} loggedIn={props.loggedIn}/>) : (<Redirect to="/signup"/>))}/>
      <Route 
        path='/login' 
        render={() => 
          (isEmpty(props.user) ? 
            (<Login loggedIn={props.loggedIn}/>) : 
            (<Redirect to="/profile"/>))} />
      <Route 
      path='/signup' 
      render={() => 
        (isEmpty(props.user) ? 
        (<Signup loggedIn={props.loggedIn}/>) : 
        (<Redirect to="/profile"/>))}/>
        <Route 
      path='/cities/:id' 
      render={() => 
        (!isEmpty(props.user) ? 
        (<CityContainer location={props.location} />) : 
        (<Redirect to="/signup"/>))}/>
    </Switch>
  );
}

export default Routes;
