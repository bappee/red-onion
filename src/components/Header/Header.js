import React from 'react';
import logo from '../../hot-onion-restaurent-resources-master/logo2.png'
import icon from '../../hot-onion-restaurent-resources-master/ICON/Path 1.png'
import bg from '../../hot-onion-restaurent-resources-master/bannerbackground.png'
import '../Header/Header.css'
const Header = () => {
    return (
        <div>
            <div className="main-header">
            <div className="logo-size"> <img src={logo} alt=""/></div>
            <div className="icon-issue"><img src={icon} alt=""/></div>
            <div className="btn-issue">
                <button>Log in</button>
                <button>Sign out</button>
            </div>
           
        </div>
        <div className className="back-g">
            <img src={bg} alt=""/>
            <div className="center">
                <h1>Best food waiting for your belly</h1> <br/>
            <input className="input" type="text" placeholder="search food items"/>
            <button className="btn-design" >Search</button>
            </div>
        </div>
        </div>
    );
};

export default Header;