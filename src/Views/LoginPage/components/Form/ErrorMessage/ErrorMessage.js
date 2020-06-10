import React from "react";
import PropTypes from "prop-types";
import "./styles.css"

const ErrorMessage = ({errorMessage}) => {

  return(
    <div className="errorMessage">
      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  )
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
}

export default ErrorMessage;