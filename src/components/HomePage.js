import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function HomePage({ setCurrentUser, currentUser }) {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then( items => {
      setItems(items);
      console.log(items);
    })
  }, []);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok === false) {
        r.json().then(() => navigate("/login"));
      } 
    });
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
      setCurrentUser(null);
      fetch("/logout", { method: "DELETE" }).then(() => navigate('/login'))
    };

    return (
      
      <div>
        Hi {currentUser.first_name}!
        <p>
          <button onClick={handleLogout}>Logout</button>
        </p>
      </div>

    );
  }
  
  export default HomePage;