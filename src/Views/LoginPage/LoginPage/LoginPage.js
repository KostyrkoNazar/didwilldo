import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import TabBar from "../components/TabBar/TabBar";
import "./styles.css";
import PropTypes from "prop-types";
import { login, register } from "../../../actions";
import { connect } from "react-redux";

function LoginPage({ login, register }) {
   // const [login, setLogin] = useState({ email: "", password: "" });
   //const [signUp, setSingUp] = useState({ email: "", password: "" });
   const [tabBarButtonId, setTabBarButtonId] = useState("login");

   const handleLogin = (email, password) => {
      //setLogin({ email, password });
      login(email, password);
   };

   const handleSignUp = (email, password) => {
      //setSingUp({ email, password });
      register({ email, password });
   };

   const handleChanges = (inputData, name) => {
      if (tabBarButtonId === "login") {
         //setLogin({ ...login, [name]: inputData });
         login({ ...login, [name]: inputData });
      }
      if (tabBarButtonId === "register") {
         //setSingUp({ ...signUp, [name]: inputData });
         register({ ...register, [name]: inputData });
      }
   };

   useEffect(() => {}, [tabBarButtonId]);

   return (
      <div className="loginPage">
         <TabBar tabBarButtonId={tabBarButtonId} setTabBarButtonId={setTabBarButtonId} />
         {tabBarButtonId === "login" ? (
            <Form key="login" handleChanges={handleChanges} onSubmit={handleLogin} initValues={login} name="Logged" />
         ) : (
            <Form
               key="register"
               handleChanges={handleChanges}
               onSubmit={handleSignUp}
               initValues={register}
               name="new"
            />
         )}
      </div>
   );
}

const mapDispatchToProps = (dispatch) => ({
   login: (email, password) => dispatch(login(email, password)),
   register: (email, password) => dispatch(register(email, password)),
});

LoginPage.propTypes = {
   login: PropTypes.func,
   register: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(LoginPage);
