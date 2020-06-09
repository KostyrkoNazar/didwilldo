import React from 'react';
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import PropTypes from 'prop-types';
import './styles.css'

function Input(props) {
    return(
      <div>
        <input {...props} onFocus={props.onFocus} className='defaultInput'/>
        <ErrorMessage message={props.errorMessage}/>
      </div>
    )
}

Input.propTypes = {
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
  onBlur: PropTypes.func,
}

export default Input