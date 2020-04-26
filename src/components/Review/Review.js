import React from 'react';

const Review = (props) => {
      
const {name,price}= props.product;
    console.log(props);
    return (
        <div>
            <h1> Order Review</h1>
    <h1>price:{price}</h1>
    <h2>Quantity:{}</h2>

      
        </div>
    );
};

export default Review;