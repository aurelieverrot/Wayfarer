import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="ui container header">
            <div className="ui large secondary inverted pointing menu">
                <Link to={'/'}>Wayfarer</Link>
                <div className="right item">
                    <Link to={'/login'} className="ui inverted button">Log In</Link>
                    <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
                    {/* <a className="ui inverted button"><Link to={'/profile'}>Profile</Link></a> */}
                </div>
            </div>
        </header>
    )
}


export default Header;