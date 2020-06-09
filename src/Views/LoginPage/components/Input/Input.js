import React from 'react';
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import PropTypes from 'prop-types';
import './styles.css'

function Input(props) {
    return(
      <div>
        <input {...props} onFocus={props.onFocus} className='defaultInput'/>
        <ErrorMessage message={props.message}/>
      </div>
    )
}

Input.propTypes = {
  onFocus: PropTypes.func,
  message: PropTypes.string,
  onBlur: PropTypes.func,
}

export default Input