import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Items from "./Items";



function HomePage({ setCurrentUser, currentUser }) {

  // >----------<Variables>----------<
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([])
  const navigate = useNavigate();

  // >----------<Fetches>----------<
  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then(setItems)
  }, []);
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok === false) {
        r.json().then(() => navigate("/login"));
      } 
    });
  }, []);

  useEffect(() => {
    fetch("/orders")
    .then((r) => {
      if (r.ok) {
        r.json()
          .then( orderItems => {
            setCart(orderItems);
          });
      } else
          r.json()
          .then((err) => {
              console.error(err)
          });
    });
    }, []);


// console.log(cart)
  // >----------<Functions>----------<
  const handleLogout = () => {
      setCurrentUser(null);
      fetch("/logout", { method: "DELETE" }).then(() => navigate('/login'))
    };

  const handleAdd = (selectedItem) => {
    const newCart = [...cart, selectedItem]
    setCart(newCart)
    fetch("/order_items", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        item_id: selectedItem.id,
        item_name: selectedItem.name
      })
    })
    .then(r => r.json())
    .then(message => console.log(message))
  }

  const handleRemove = (deselectedItem) => {
    console.log(cart)
    const indexToDelete = cart.findIndex((item) => item.id === deselectedItem.id)
    if(indexToDelete !== -1) {
      const newCart = [...cart]
      newCart.splice(indexToDelete, 1)
      setCart(newCart)
      const id = deselectedItem.id
      fetch(`/order_items/${id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then(message => console.log(message))
    } 
  }

  const handleCheckout = () => {
    const price_ids = cart.map((item) => (
      item.price_id
      ))
      console.log(price_ids)
    if (price_ids.length > 0)
      fetch("/create-checkout-session", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ price_id: price_ids })
      })
      .then( r => r.json())
      .then( url => window.location.href = url )
  };
  console.log(cart)
  let checkoutButton;
  if (cart.length > 0) {
    checkoutButton = <button onClick={handleCheckout}>Checkout</button>
  } else {
    checkoutButton = <div></div>
  }

  return (

    <>
      <div>
        Hi {currentUser.first_name}!
      <div>
        {items.map((item) => (
        <Items key={item.id} item={item} handleAdd={handleAdd} handleRemove={handleRemove} cart={cart}/>
        ))}
      </div>
      <div>
        {checkoutButton}
      </div>
      <br/>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default HomePage;