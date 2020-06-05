import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";
import LoginPage from "./Views/LoginPage/LoginPage/LoginPage";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function App({ appState }) {
   return <div className="App">{appState.isLoggedIn ? <Dashboard /> : <LoginPage />}</div>;
}

const mapStateToProps = (appState) => {
   return appState;
};

App.propTypes = {
   appState: PropTypes.object,
};

export default connect(mapStateToProps)(App);
