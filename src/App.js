import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";
import LoginPage from "./Views/LoginPage/LoginPage/LoginPage";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function App({ isLoggedIn }) {
   return <div className="App">{isLoggedIn ? <Dashboard /> : <LoginPage />}</div>;
}

const mapStateToProps = (state) => {
   const { appState } = state;
   return { ...appState, isLoggedIn: appState.isLoggedIn };
};

App.propTypes = {
   isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
