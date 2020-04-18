import React from 'react';

const Nastalist = (props) => {

    const {name,price,caption,images}=props.product;
   
    console.log(props);
    return (
        <div>
            <div> <img src={images} alt=""/></div>
           
           <h3>{name}</h3>
           <h4>{caption}</h4>
           <h2>{price}</h2>
        </div>
        
    );
};

export default Nastalist;