// import {useState} from "react";

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
            <p><button onClick={() => handleAdd(item)}>+</button> {item.name} ${item.price} <button onClick={() => handleRemove(item)}>-</button></p>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default Items