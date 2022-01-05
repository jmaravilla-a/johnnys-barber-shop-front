import React from "react";
import { Routes, Route } from "react-router-dom";
// import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import SignInSide from "./forms/SignInSide";

function LoggedOut({ setCurrentUser }) {
  return (
    
    <div>
      <Routes>
        <Route
          exact
          path="/login"
          element={<SignInSide setCurrentUser={setCurrentUser} />}
        />

        <Route
          exact
          path="/signup"
          element={<SignupForm setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default LoggedOut;
