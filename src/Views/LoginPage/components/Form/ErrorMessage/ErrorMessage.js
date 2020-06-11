import React from "react";
import PropTypes from "prop-types";
import "./styles.css"

const ErrorMessage = ({error}) => {

  return(
    <div className="errorMessage">
      {error ? <span>{error}</span> : null}
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
}

export default ErrorMessage;