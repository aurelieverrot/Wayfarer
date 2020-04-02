import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

// const Header = () => {
class Header extends React.Component {
    
    render() {
        return (
        <div class="pusher">
                <div class="ui container">
                    <div class="ui large secondary inverted pointing menu">
                        <a class="toc item">
                        <i class="sidebar icon"></i>
                        </a>
                        <Link to={'/'} className="active item">Home</Link>
                        <div class="right item">
                            <Link to={'/login'} className="ui inverted button">Log In</Link>
                            <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
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