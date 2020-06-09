import React from "react";
import PropTypes from "prop-types";
import "./styles.css"

const ErrorMessage = ({message}) => {

  return(
    <div className="errorMessage">
      {message ? <span>{message}</span> : null}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage;