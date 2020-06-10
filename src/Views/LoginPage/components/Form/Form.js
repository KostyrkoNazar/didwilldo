import React, { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./styles.css";
import PropTypes from "prop-types";
import {emailValidation,passwordValidation} from "../Form/validation"
import {INVALID_EMAIL,ENTER_EMAIL,ENTER_PASSWORD,INVALID_PASSWORD} from "../Form/validation";

function Form(props) {

  const [validationError, setValidationError] = useState({fieldName:null, errormessage:""});

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
            onFocus={(e) => setValidationEmail({ ...validationEmail, errorMessage: emailValidation(e.target.value) })}
            error={validationEmail.errorMessage}

         />
         <Input
            type="password"
            placeholder="password"
            autoComplete=""
            name="password"
            value={props.initValues.password}
            onChange={(e) => setValue(e.target.value, "password")}
            onFocus={(e) => setValidationPassword({ ...validationPassword, errorMessage: passwordValidation(e.target.value)})}
            error={validationPassword.errorMessage}
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
  submitEnabled: PropTypes.bool,
};

export default Form;
