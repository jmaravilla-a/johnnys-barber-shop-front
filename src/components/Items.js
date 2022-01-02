// import {useState} from "react";

function Items ({item, handleAdd, handleRemove, cart}) {
    // const [quantity, setQuantity] = useState(0)
    // const amount = () => {
    //     cart.map((items) => (

    //     ))
    // }
    return (
        <div>
            <p><button onClick={() => handleAdd(item)}>+</button> {item.name} ${item.price} <button onClick={() => handleRemove(item)}>-</button></p>
            <p>Quantity: {}</p>
        </div>
    )
}

export default Items