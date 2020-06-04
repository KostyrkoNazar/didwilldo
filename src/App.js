import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { DEFAULT_DATA } from "./appConfig";
import "./App.css";

import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Dashboard data={DEFAULT_DATA} />
         </div>
      </Provider>
   );
}

export default App;
