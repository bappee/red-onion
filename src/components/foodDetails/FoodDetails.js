import React from 'react';
import { useParams } from 'react-router-dom';
import breakfast from '../../FoodsData/breakfast';
import Nastalist from '../NastaList/Nastalist';



const FoodDetails = (props) => {



    const{productName}=useParams();
    const product = breakfast.find(pd=>pd.name=== productName);
   

    return (
        <div>
            <h2>your product details</h2>
            
            <h3>name:{productName} </h3> <Nastalist 
        
            
            product={product}>
                
            </Nastalist>
      

           
        </div>
    );
};

export default FoodDetails;