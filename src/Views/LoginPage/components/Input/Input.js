import React from 'react';
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import PropTypes from 'prop-types';
import './styles.css'

function Input(props) {
    return(
      <div>
        <input {...props} onFocus={props.onFocus} className='defaultInput'/>
        <ErrorMessage error={props.error}/>
      </div>
    )
}

Input.propTypes = {
  onFocus: PropTypes.func,
  error: PropTypes.string,
}

export default Input