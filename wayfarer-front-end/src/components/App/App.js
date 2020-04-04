import React from 'react';
import Routes from '../../config/routes';
import './App.css';
import UserApi from '../../api/UserApi';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

class App extends React.Component {
  state = {
    loggedIn : false,
    currentUser: {}
  }
  componentDidMount = () => {
    // verify current session
    console.log("verifying");
    UserApi.verify()
    .then(res => {
    // if status 200, set loggedIn to true, currentUser to non-null
      console.log("~~~~~~")
      // console.log(res.data.currentUser);
      this.setState({
          loggedIn: true,
          currentUser: res.data.currentUser
      })
  })
    // if status 200, set loggedIn to true, currentUser to non-null
  }
  loggedIn = (user) => {
    console.log(user);
    this.setState({
      loggedIn: true,
      currentUser: user
    })
  }
  logout = () => {
    this.setState({
      loggedIn: false,
      currentUser: ''
    })
    UserApi.logout()
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
        {/* { routes } */}
        <Routes loggedIn={this.loggedIn} user={this.state.currentUser} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
