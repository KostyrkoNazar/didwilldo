import React from 'react';
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import PropTypes from 'prop-types';
import './styles.css'

function Input({type, autoComplete, placeholder, onFocus, name, value, onChange, error}) {

    return(
      <div>
        <input type={type}
               autoComplete={autoComplete}
               placeholder={placeholder}
               onBlur={onFocus}
               name={name}
               value={value}
               onChange={onChange}
               className='defaultInput'/>
        <ErrorMessage error={error}/>
      </div>
    )
}

Input.propTypes = {
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
}

export default Input