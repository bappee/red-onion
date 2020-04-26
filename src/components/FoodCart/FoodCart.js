import React from 'react';
import { Link } from 'react-router-dom';

const FoodCart = (props) => {
   
    const add= props.add;
    console.log(add)
    
    //const total= add.reduce((total,prd)=>total+ prd.price ,0)
    //const newValue= total.toFixed(2);
     let total=0;
     for (let i = 0; i < add.length; i++) {
         const product = add[i];
         total= total+product.price;
         
     }

    let delivery= 0;
    if(total>0){
        delivery = 2;
    }

      const twoFixedNumber=num=>{
          const round= num.toFixed(2);
          return Number(round);
      }


    return (
        <div>
            <h1>This is cart items:</h1>
            <h2>Order Items:{add.length}</h2>
    <h3>Item price:{twoFixedNumber(total)}</h3>
    <h4>Delivery cost:{delivery}</h4>
    <h5>Total cost:{twoFixedNumber(total+delivery)}</h5>
  
        </div>
    );
};

export default FoodCart;