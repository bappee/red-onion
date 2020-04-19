import React from 'react';
import './NastaList.css'

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
               <button  className="btn-danger"
               onClick={()=>props.handleDetailsBtn(props.product)}
               >View Details</button>
            </div>
      

      </div>






   );
};

export default Nastalist;