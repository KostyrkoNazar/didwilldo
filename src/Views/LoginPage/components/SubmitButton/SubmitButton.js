import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

function SubmitButton(props) {
   return <button disabled={props.disabled} className="submitButton" >{props.label}</button>;
}

SubmitButton.propTypes = {
   label: PropTypes.string,
   disabled: PropTypes.bool,
};

export default SubmitButton;
