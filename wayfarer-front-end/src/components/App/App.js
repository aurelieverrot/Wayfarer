import React from 'react';
import Routes from '../../config/routes';
import './App.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

class App extends React.Component {
  state = {
    loggedIn : false,
    currentUser: {}
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
