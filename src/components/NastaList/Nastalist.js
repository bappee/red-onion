import React from 'react';
import './NastaList.css'
import { Link } from 'react-router-dom';

const Nastalist = (props) => {

   const { name, price, caption, images } = props.product;

   return (

      <div className="col-md-2  Menu">
       
            <div className="row">

               <img src={images} alt="" className=" img-size " />
            </div>
            <div>
               <h6>{name}</h6>
               <p><span>{caption}</span></p>
               <h5>${price}</h5>
          <h4><Link to={"/product/"+name}>Order Now</Link> </h4>
            </div>
      

      </div>






   );
};

export default Nastalist;