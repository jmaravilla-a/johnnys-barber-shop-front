function Items ({item, handleAdd, handleRemove}) {
    
    return (
        <div>
            <p><button onClick={() => handleAdd(item)}>+</button> {item.name} ${item.price} <button onClick={() => handleRemove(item)}>-</button></p>
            <p>Quantity: {}</p>
        </div>
    )
}

export default Items