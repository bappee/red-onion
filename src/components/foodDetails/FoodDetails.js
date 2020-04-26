import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import breakfast from '../../FoodsData/breakfast';
import Nastalist from '../NastaList/Nastalist';
import './FoodDetails.css'
import FoodCart from '../FoodCart/FoodCart';
import Review from '../Review/Review';


const FoodDetails = (props) => {
  
  const [cart,setCart]= useState(breakfast);
  const [add,setAdd]=useState([]);
  const [addCart, setAddCart]=useState([]);

  const addFoodhandler=(product)=>{
    const newAdd= [...add,product];
    setAdd(newAdd);
     
  }
  
  const removeProduct=(product)=>{
        
    const newAdd=add.filter(pd=>pd !==product)
    
    setAdd(newAdd);
  
  }

   const handleAddCart=(product)=>{
     const newAddCart= [...addCart,product];
     setAddCart(newAddCart)
   }
   




    const{productName}=useParams();
    const product = breakfast.find(pd=>pd.name=== productName);

    return (
        
          <div className="row " id="space">
  <div className="col"></div>
  <div class="col">
  <h2>{product.name}</h2>
    <h6>{product.description}</h6> <br/>
    <h5>Price:{product.price}</h5>
    <br/>
    <div class="col-md-5 center-item">
    <div class="input-group number-spinner" >
    <button onClick={()=>removeProduct(product)}  class="btn btn-default"><i class="fas fa-minus"></i>−</button>
    <input  type="text" class=" form-control text-center" value={add.length}></input>
    <button onClick={()=>addFoodhandler(product)}  class="btn btn-default"><i class="fas fa-plus"></i>＋</button>
    </div>
    </div>
    <br/>
    <button onClick={()=> handleAddCart(product)} className="btn-danger">Add to Cart</button>
    

  </div>
  <div class="col">  <img class="img-fluid" src={product.images} alt=""/></div>
  <div class="col"> <FoodCart  add={add}></FoodCart>

  {
    addCart.map(pd=> <Review 
      addCart={addCart}
      product={pd}></Review>)
  }
         </div>
       
</div>

   
            
            

           

    );
};

export default FoodDetails;