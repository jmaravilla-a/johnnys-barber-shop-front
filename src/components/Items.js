import * as React from 'react';
import Button from '@mui/material/Button';


function Items ({item, handleAdd, handleRemove, cart}) {

    let quantity = 0;
    for (let i=0; i <= cart.length -1; i++) {
        if (item.id === cart[i].id) {
            quantity++
        }
    }
    // console.log(quantity)
    
    return (
        <div>
            <p><Button variant="outlined" color="success" size="small" onClick={() => handleAdd(item)}>+</Button> 
            {item.name} ${item.price} 
            <Button variant="outlined" color="error" size="small" onClick={() => handleRemove(item)}>-</Button></p>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default Items