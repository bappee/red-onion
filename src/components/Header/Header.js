import React from 'react';
import logo from '../../hot-onion-restaurent-resources-master/logo2.png'
import icon from '../../hot-onion-restaurent-resources-master/ICON/Path 1.png'

import '../Header/Header.css'
import Auth from '../Login/useAuth';



const Header = () => {
    const auth = Auth();
    return (
        <div>
            <div className="main-header">
            <div className="logo-size"> <img src={logo} alt=""/></div>
            
            <div className="icon-issue"><img src={icon} alt=""/></div>
            <div className="btn-issue">
            { auth.user ? <button className="btn-des" onClick={auth.signOut}>Sign Out</button> :
                <button className="btn-des" onClick={auth.signInWithGoogle} >Sign In</button>
                }
            
            { auth.user && <h6>{auth.user.name}</h6>}

            </div>
           
        </div>
       
        </div>
    );
};

export default Header;