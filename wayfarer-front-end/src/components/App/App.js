import React from 'react';
import Routes from '../../config/routes';
import './App.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

class App extends React.Component {
  state = {
    loggedIn : false
  }
  loggedIn = () => {
    this.setState({
      loggedIn: true
    })
  }
  logout = () => {
    this.setState({
      loggedIn: false
    })
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
        {/* { routes } */}
        <Routes loggedIn={this.loggedIn} />
        <Footer />
      </div>
    );
  }
}

export default App;
