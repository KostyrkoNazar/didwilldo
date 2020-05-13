import React from 'react';
import Dashboard from "./Dashboard/Dashboard";
import {DEFAULT_DATA} from "./appConfig"
import './App.css'

function App() {

  return (
    <div className="App">
      <Dashboard data={DEFAULT_DATA}/>
    </div>
  );
}

export default App;
