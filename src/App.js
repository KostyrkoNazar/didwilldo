import React from 'react';
import Dashboard from "./Dashboard/Dashboard";
import data from "./data/data";

function App() {

  return (
    <div className="App">
      <Dashboard data={data}/>
    </div>
  );
}

export default App;
