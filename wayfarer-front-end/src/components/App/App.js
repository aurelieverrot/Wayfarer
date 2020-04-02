import React from 'react';
import Routes from '../../config/routes';
import './App.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

class App extends React.Component {
  state = {

  }
  loggedIn = () => {
    //do stuff
    console.log("HERE")
  }
  render() {
    return (
      <div className="App">
        <Header/>
        {/* { routes } */}
        <Routes loggedIn={this.loggedIn} />
        <Footer />
      </div>
    );
  }
}

export default App;
