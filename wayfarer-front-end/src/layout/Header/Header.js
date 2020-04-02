import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

// const Header = () => {
class Header extends React.Component {
    render() {
    let leftLinks = [];
    let rightLinks = [];
    console.log("Rendering header")
    console.log(this.props)
    console.log(this.props.loggedIn)
    if (!this.props.loggedIn) {
    console.log("user is not loggedin")
        //if user not loggedin
        //populate left links with necessary fields
        leftLinks= [<><Link to={'/'} className="active item">Home</Link>,
        <Link to={'/about'} className="item">About</Link></>]
        rightLinks = [<><Link to={'/login'} className="ui inverted button">Log In</Link>
        <Link to={'/signup'} className="ui inverted button">Sign Up</Link></>]
    }
    else {
        // user is loggedin
    console.log("user is loggedin")
        leftLinks= [<><Link to={'/'} className="active item">Home</Link>,
        <Link to={'/about'} className="item">About</Link>, <Link to={'/profile'} className="item">Profile</Link></>]
        rightLinks = [<><Link to={'/signout'} className="ui inverted button">Sign Out</Link></>]
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




//   <div className="ui inverted vertical masthead center aligned segment">
//             <div className="ui container header">
//                 <div className="ui large secondary inverted pointing menu">
            
//                     <a className="toc item">
//                         <i className="sidebar icon"/>
//                     </a>
//                     <Link to={'/'} className="active item">Home</Link>
//                     no About in client wireframe
//                     <Link to={'/login'} className="item">About</Link>
//                     <div className="right item">
//                         <Link to={'/login'} className="ui inverted button">Log In</Link>
//                         <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
//                         <a className="ui inverted button"><Link to={'/profile'}>Profile</Link></a>
//                     </div>
//                 </div>
//             </div> 
// </div> 