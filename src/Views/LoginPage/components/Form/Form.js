import React, { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./styles.css";
import PropTypes from "prop-types";
import {emailValidation} from "../Form/validation"

function Form(props) {

  const [validationError, setValidationError] = useState({fieldName:null, errorMessage:null});

  const onPreSubmit = (e) => {
    e.preventDefault()
      props.onSubmit(props.initValues.email, props.initValues.password);
   };

   const setValue = (inputData, name) => {
      props.handleChanges(inputData, name);
   };

   return (
      <form className="loginForm" onSubmit={onPreSubmit} name={props.name}>
         <Input
            type="email"
            autoComplete=""
            placeholder="email"
            name='email'
            value={props.initValues.email}
            onChange={(e) => setValue(e.target.value, "email")}
            onFocus={(e) => setValidationError({ ...validationError, errorMessage: emailValidation(e.target.value) })}
            message={validationError.errorMessage}

         />
         <Input
            type="password"
            placeholder="password"
            autoComplete=""
            name="password"
            value={props.initValues.password}
            onChange={(e) => setValue(e.target.value, "password")}
         />
         <SubmitButton label="Submit" />
      </form>
   );
}

Form.propTypes = {
   onSubmit: PropTypes.func,
   initValues: PropTypes.object,
   handleChanges: PropTypes.func,
   name: PropTypes.string,
};

export default Form;
