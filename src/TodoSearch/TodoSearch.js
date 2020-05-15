import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function TodoSearch({ onClear, onChange, value }) {
   return (
      <div className="searchTitle">
         <input
            type="text"
            placeholder="Type note..."
            name="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
         />
         <button type="submit" onClick={onClear}>
            X
         </button>
      </div>
   );
}

TodoSearch.propTypes = {
   onClear: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   value: PropTypes.string,
};

export default TodoSearch;
