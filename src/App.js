import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { DEFAULT_DATA } from "./appConfig";
import "./App.css";
import LoginPage from "./Views/LoginPage/LoginPage/LoginPage";
import { login } from "./api";
import { logout } from "./api";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const loginUser = (email, password) => {
      const loginState = login(email, password);
      setIsLoggedIn(loginState);
   };

   const logoutUser = () => {
      const logoutState = logout("");
      setIsLoggedIn(logoutState);
   };

   return (
      <div className="App">
         {isLoggedIn ? <Dashboard data={DEFAULT_DATA} logoutUser={logoutUser} /> : <LoginPage loginUser={loginUser} />}
      </div>
   );
}

export default App;
