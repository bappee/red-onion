import React from 'react';
import bg from '../../hot-onion-restaurent-resources-master/bannerbackground.png'
import './Banner.css'
const Banner = () => {
    return (
        
             <div className className="back-g">
            <img src={bg} alt=""/>
            <div className="center">
                <h1>Best food waiting for your belly</h1> <br/>
            <input className="input" type="text" placeholder="search food items"/>
            <button className="btn-design" >Search</button>
            </div>
        </div>
        
    );
};

export default Banner;