import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoggedOut from "./LoggedOut";
import HomePage from "./HomePage";
// import styled from "styled-components"
import '../App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
        });
      } else  {
        setCurrentUser(null);
      }
    });
  }, []);


  if(!currentUser)
    return (<LoggedOut setCurrentUser={setCurrentUser} />);

  
    

  return (
    <div>
      <h1>Welcome to Johnny's Barber Shop</h1>
      <Routes >
        <Route exact path="/" element={<HomePage setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />

      </Routes>
    </div>
  );
}

export default App;

