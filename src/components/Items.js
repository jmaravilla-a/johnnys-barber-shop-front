// import * as React from 'react';
import Button from '@mui/material/Button';


function Items ({item, handleAdd, handleRemove, cart}) {

    let quantity = 0;
    for (let i=0; i <= cart.length -1; i++) {
        if (item.id === cart[i].id) {
            quantity++
        }
    }
    
    return (
        <div>
            <div className='individualItem'>
                <Button variant="outlined" color="success" size="small" onClick={() => handleAdd(item)}>+</Button> 
                <span > {item.name} </span>
                <Button variant="outlined" color="error" size="small" onClick={() => handleRemove(item)}>-</Button>
            </div>
            <div className='cartPriceParent'>
                <div className='cartPriceChild'>Cart: {quantity} </div>
                <div className='cartPriceChild' >Price: ${item.price}</div>
            </div>  
        </div>
    )
}

export default Items