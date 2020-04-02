import React from 'react';
import routes from '../../config/routes';
import './App.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

function App() {
  return (
    
    <div className="App">

      <Header/>
      { routes }
      <Footer />
    </div>
  );
}

export default App;
