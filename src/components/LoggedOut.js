import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpSide from "./forms/SignUpSide";
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
          element={<SignUpSide setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default LoggedOut;
