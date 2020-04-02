import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="ui container header">
            <div className="ui large secondary inverted pointing menu">
                <a className="item"><h1><Link to={'/'}>Wayfarer</Link></h1></a>
                <div className="right item">
                    <a className="ui inverted button"><Link to={'/login'}>Log In</Link></a>
                    <a className="ui inverted button"><Link to={'/signup'}>Sign Up</Link></a>
                    {/* <a className="ui inverted button"><Link to={'/profile'}>Profile</Link></a> */}
                </div>
            </div>
        </header>
    )
}


export default Header;