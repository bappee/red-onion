import React, { useState } from 'react';

import breakfast from '../../FoodsData/breakfast';

const Nasta = () => {

    const breakData=breakfast.slice(0,6);
    const [products,setProducts]= useState(breakData)
    return (
        <div>
           <ul>
               {
                   products.map(pd=> <li>{pd}</li>)
               }
               </ul> 
        </div>
    );
};

export default Nasta;