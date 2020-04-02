import React from 'react';
// import logo from './logo.svg';
import Routes from '../../config/routes';
import './App.css';
import Header from '../../layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
