import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

// const Header = () => {
class Header extends React.Component {
    render() {
    let leftLinks = [];
    let rightLinks = [];
    if (!this.props.loggedIn) {
        //if user not loggedin
        //populate left links with necessary fields
        leftLinks= [<><Link to={'/'} key={0} className="active item">Home</Link>,
        <Link to={'/about'} key={1} className="item">About</Link></>]
        rightLinks = [<><Link to={'/login'} className="ui inverted button">Log In</Link>
        <Link to={'/signup'} key={3} className="ui inverted button">Sign Up</Link></>]
    }
    else {
        // user is loggedin
        leftLinks= [<>
        <Link to={'/'} key={0} className="active item">Home</Link>,
        <Link to={'/about'} key={1} className="item">About</Link>, 
        <Link to={'/profile'} key={2} className="item">Profile</Link>
        <Link to={'/cities/san-francisco'} key={3} className="item">Cities</Link>
        </>]

        rightLinks = [<>
        <Link onClick={this.props.logout} key={4} to={'/'} className="ui inverted button">Sign Out</Link>
        </>]
    }
        return (
        <div class="pusher">
                <div class="ui container">
                    <div class="ui large secondary inverted pointing menu">
                        <a class="toc item">
                        <i class="sidebar icon"></i>
                        </a>
                        {/* <Link to={'/'} className="active item">Home</Link>
                        <Link to={'/profile'} className="item">Profile</Link> */}
                        {leftLinks}
                        <div class="right item">
                            {/* <Link to={'/login'} className="ui inverted button">Log In</Link>
                            <Link to={'/signup'} className="ui inverted button">Sign Up</Link> */}
                        {rightLinks}

                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Header;    