import React, { useState } from 'react';

import breakfast from '../../FoodsData/breakfast';
import Nastalist from '../NastaList/Nastalist';
import { prettyDOM } from '@testing-library/react';


const Nasta = () => {

    const breakData=breakfast.slice(0,6);
    const [products,setProducts]= useState(breakData)
  


    return (
        <div >
            <div className="row ">
           
               {
                   products.map(nasta=> <Nastalist
            
                     product={nasta}
                    ></Nastalist>)
               }
              
            </div>
            
            <div>
                
            </div>

        </div>
    );
};

export default Nasta;