import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Items from "./Items";
import Checkout from "./Checkout";


function HomePage({ setCurrentUser, currentUser }) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([])
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then( items => {
      setItems(items);
    })
  }, []);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok === false) {
        r.json().then(() => navigate("/login"));
      } 
    });
  }, []);

  const handleLogout = () => {
      setCurrentUser(null);
      fetch("/logout", { method: "DELETE" }).then(() => navigate('/login'))
    };

    const handleAdd = (selectedItem) => {
      const newCart = [...cart, selectedItem]
      setCart(newCart)
    }

    const handleRemove = (deselectedItem) => {
      const indexToDelete = cart.findIndex((item) => item.id === deselectedItem.id)
      console.log(indexToDelete)
      if(indexToDelete !== -1) {
        const newCart = [...cart]
        newCart.splice(indexToDelete, 1)
        setCart(newCart)
      }
    }
    console.log(cart)

    const handleCheckout = () => {
      fetch("/logout", { method: "DELETE" }).then(() => navigate('/login'))
    };

    return (

      <>
        <div>
          Hi {currentUser.first_name}!
        <div>
        {items.map((item) => (
          <Items key={item.id} item={item} handleAdd={handleAdd} handleRemove={handleRemove} />
          ))}
        </div>
        <div>
          <button>Checkout</button>
        </div>
        <br/>
          <button onClick={handleLogout}>Logout</button>
          
        </div>
      </>
    );
  }
  
  export default HomePage;