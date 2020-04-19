import React from 'react';

const FoodDetails = (props) => {
    const details= props.details
    return (
        <div>
            <h5>This is Food details component</h5>
           <ul>
               {
                   details.map(pt=> <li>{pt.id} {pt.name} {pt.description}</li>)
               }
           </ul>
        </div>
    );
};

export default FoodDetails;