import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
// class Header extends React.Component {
    // state = {
    //     hover: false
    // }
    
    // toggleHover() {
    //     this.setState({hover: !this.state.hover})
    // }
    
    // render() {
    //    let linkStyle;
    //    if (this.state.hover) {
    //      linkStyle = {color: '#ed1212',cursor: 'pointer'}
    //    } else {
    //      linkStyle = {color: '#000'}
    // };

    return (
        <div className="ui inverted vertical masthead center aligned segment">
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
// }
}

export default Header;    


// style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
// Hamburger
// <div class="ui vertical inverted sidebar menu left uncover visible" style="">
//     <a class="active item">Home</a>
//     <a class="item">About</a>
//     <a class="item">Log In</a>
//     <a class="item">Sign Up</a>
// </div>