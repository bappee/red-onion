import React, { useState } from 'react';

import breakfast from '../../FoodsData/breakfast';
import Nastalist from '../NastaList/Nastalist';
import FoodDetails from '../foodDetails/FoodDetails';

const Nasta = () => {

    const breakData=breakfast.slice(0,6);
    const [products,setProducts]= useState(breakData)
  const [details,setDetails] = useState([]);


  const handleDetailsBtn =(product)=>{
   const newDetails=[...details,product]
   setDetails(newDetails);
   

  }

    return (
        <div >
            <div className="row">
           
               {
                   products.map(nasta=> <Nastalist
                    handleDetailsBtn={handleDetailsBtn}
                    product={nasta}></Nastalist>)
               }
              
            </div>
            
            <div>
                <FoodDetails details={details}></FoodDetails>
            </div>

        </div>
    );
};

export default Nasta;