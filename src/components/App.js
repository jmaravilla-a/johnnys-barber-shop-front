import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoggedOut from "./LoggedOut";
import HomePage from "./HomePage";
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
    <>
      <div className="header">
        <img className="logo" src="https://lh3.googleusercontent.com/RaNBDC1mlmSWXY7G1_Db93EQxTwzMwqiRS7Yq_BnJtfRobiEs7UIxjx97SSX0QpcY4I_RvJW=w1080-h608-p-no-v0"/>
      </div>
      <div id="parentwrapper">
      <div id="wrapper">
        <Routes >
          <Route exact path="/" element={<HomePage setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
