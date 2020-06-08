import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({message}) => {

  return(
    <div>
      {message ? <span style={{color : "red"}}>{message}</span> : null}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage;