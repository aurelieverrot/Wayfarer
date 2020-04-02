import React from 'react';
import './Home.css';
import Login from '../Login/Login';
// import '../../../public/images';

const Home = (props) => {
    return(
        // if login, remove Wayfarer
        // if signup, remove Wayfarer
        <div class="ui text container">
            <h1 class="ui inverted header">
                Wayfarer
            </h1>
        </div> 
        // <div className="home-content">
        //     {/* <img src="./images/hero.jpg" alt="the world is your oyster"></img> */}
        // </div>
    );
}

export default Home;