import React, { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./styles.css";
import PropTypes from "prop-types";
import {emailValidation,passwordValidation} from "./validation"

function Form(props) {

  const [validationError, setValidationError] = useState({fieldName:"", errorMessage: ""});


  const onPreSubmit = (e) => {
    e.preventDefault()
      props.onSubmit(props.initValues.email, props.initValues.password);
   };

   const setValue = (inputData, name) => {
      props.handleChanges(inputData, name);
   };

   const setValidation = (e) => {
     if (e.target.name === "email") {
       setValidationError(
         { ...validationError,
           errorMessage: emailValidation(e.target.value),
           fieldName: "email" })
     } else {
       setValidationError(
         { ...validationError,
           errorMessage: passwordValidation(e.target.value),
           fieldName: "password"})
     }
   }

   const {fieldName, errorMessage} = validationError;

   return (
      <form className="loginForm" onSubmit={onPreSubmit} name={props.name}>
         <Input
            type="email"
            autoComplete=""
            placeholder="email"
            name="email"
            value={props.initValues.email}
            onChange={(e) => setValue(e.target.value, "email")}
            onFocus={(e) => setValidation(e) }
            error={ fieldName === "email" ? errorMessage : null}

         />
         <Input
            type="password"
            placeholder="password"
            autoComplete=""
            name="password"
            value={props.initValues.password}
            onChange={(e) => setValue(e.target.value, "password")}
            onFocus={(e) => setValidation(e)}
            error={ fieldName === "password" ? errorMessage : null}
         />
         <SubmitButton disabled={!props.submitEnabled || errorMessage } label="Submit" />
      </form>
   );
}

Form.propTypes = {
   onSubmit: PropTypes.func,
   initValues: PropTypes.object,
   handleChanges: PropTypes.func,
   name: PropTypes.string,
  submitEnabled: PropTypes.bool,
};

export default Form;
