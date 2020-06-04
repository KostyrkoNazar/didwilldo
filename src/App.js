import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { DEFAULT_DATA } from "./appConfig";
import "./App.css";
import LoginPage from "./Views/LoginPage/LoginPage/LoginPage";
import { loginIn } from "./api";

function App() {
   const [initialLoginPageState, setInitialLoginPageState] = useState(false);

   return (
      <div className="App">
         {initialLoginPageState ? <Dashboard data={DEFAULT_DATA} /> : <LoginPage loginIn={loginIn} />}
      </div>
   );
}

export default App;
