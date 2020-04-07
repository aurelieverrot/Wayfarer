import React from 'react';
import './Home.css';
import Login from '../Login/Login';
// import '../../../public/images';

const Home = (props) => {
    return(
        // if login, remove Wayfarer
        // if signup, remove Wayfarer
        <div className="ui text container">
            <h1 id="homeTitle" className="ui inverted header">
                Wayfarer
            </h1>
            <h2 id="subheader">Travel to the Cities of Your Dreams!</h2>
        </div> 
        // <div className="home-content">
        //     {/* <img src="./images/hero.jpg" alt="the world is your oyster"></img> */}
        // </div>
    );
}

export default Home;