import React, { useState } from 'react';

import breakfast from '../../FoodsData/breakfast';
import Nastalist from '../NastaList/Nastalist';

const Nasta = () => {

    const breakData=breakfast.slice(0,6);
    const [products,setProducts]= useState(breakData)
    return (
        <div>
           
               {
                   products.map(nasta=> <Nastalist product={nasta}></Nastalist>)
               }
              
               <div>
                   
               </div>
        </div>
    );
};

export default Nasta;