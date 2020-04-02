import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="ui container">
            <div className="ui large secondary inverted pointing menu">
                <a className="item"><Link to={'/'}>Wayfarer</Link></a>
                <div className="right item">
                    <a className="ui inverted button"><Link to={'/signup'}>Sign Up</Link></a>
                    <a className="ui inverted button"><Link to={'/signup'}>Sign Up</Link></a>
                    {/* <a className="ui inverted button"><Link to={'/profile'}>Profile</Link></a> */}
                </div>
            </div>
        </header>
    )
}


export default Header;