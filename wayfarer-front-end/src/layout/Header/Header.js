import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div class="ui inverted vertical masthead center aligned segment">
        <div className="ui container header">
            <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                    <i className="sidebar icon"/>
                </a>
                <Link to={'/'} className="active item">Home</Link>
                <Link to={'/'} className="item">About</Link>
                <div className="right item">
                    <Link to={'/login'} className="ui inverted button" style={{margin: "0 10px"}}>Log In</Link>
                    <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
                    {/* <a className="ui inverted button"><Link to={'/profile'}>Profile</Link></a> */}
                </div>
            </div>
        </div>
        </div>
    )
}


export default Header;    



{/* <div class="ui inverted vertical masthead center aligned segment">

<div class="ui container">
  <div class="ui large secondary inverted pointing menu">
    <a class="toc item">
      <i class="sidebar icon"></i>
    </a>
    <a class="active item">Home</a>
    <a class="item">Work</a>
    <a class="item">Company</a>
    <a class="item">Careers</a>
    <div class="right item">
      <a class="ui inverted button">Log in</a>
      <a class="ui inverted button">Sign Up</a>
    </div>
  </div>
</div>

<div class="ui text container">
  <h1 class="ui inverted header">
    Imagine-a-Company
  </h1>
  <h2>Do whatever you want when you want to.</h2>
  <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
</div>

</div> */}

{/* <div class="ui vertical inverted sidebar menu left">
  <a class="active item">Home</a>
  <a class="item">Work</a>
  <a class="item">Company</a>
  <a class="item">Careers</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>

<a class="active item">Home</a>
 */}

