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
    //do stuff
    console.log("changing app state")
    this.setState({
      loggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn}/>
        {/* { routes } */}
        <Routes loggedIn={this.loggedIn} />
        <Footer />
      </div>
    );
  }
}

export default App;
