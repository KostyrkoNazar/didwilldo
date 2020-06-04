import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

function SubmitButton(props) {
   return <button className="submitButton">{props.label}</button>;
}

SubmitButton.propTypes = {
   label: PropTypes.string,
};

export default SubmitButton;
