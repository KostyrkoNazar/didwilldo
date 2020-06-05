import React /*, { useState }*/ from "react";
import Dashboard from "./Dashboard/Dashboard";
//import { DEFAULT_DATA } from "./appConfig";
import "./App.css";
import LoginPage from "./Views/LoginPage/LoginPage/LoginPage";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import { store } from "./store/store";
//import { Provider } from "react-redux";

function App({ appState }) {
   /*const [isLoggedIn, setIsLoggedIn] = useState(false);

   const loginUser = (email, password) => {
      const loginState = login(email, password);
      setIsLoggedIn(loginState);
   };

   const logoutUser = () => {
      const logoutState = logout("");
      setIsLoggedIn(logoutState);
   };*/

   console.log(appState);
   return <div className="App">{appState ? <Dashboard /> : <LoginPage />}</div>;
}

const mapStateToProps = (state) => {
   return state;
};

App.propTypes = {
   appState: PropTypes.object,
};

export default connect(mapStateToProps)(App);
