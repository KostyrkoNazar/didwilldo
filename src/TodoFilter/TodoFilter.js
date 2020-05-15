import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoFilter({ show }) {
   const [isFiltered, setIsFiltered] = useState(false);

   const setFiltered = (value) => {
      setIsFiltered(value);
      show(value);
   };

   return (
      <div>
         <input type="checkbox" checked={isFiltered} onChange={() => setFiltered(!isFiltered)} />

         <label>Show done</label>
      </div>
   );
}

TodoFilter.propTypes = {
   show: PropTypes.func,
};

export default TodoFilter;
