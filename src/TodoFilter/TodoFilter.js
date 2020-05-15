import React from "react";
import PropTypes from "prop-types";

function TodoFilter({ isFiltered, setFiltered }) {
   return (
      <div>
         <input type="checkbox" value={isFiltered} onChange={(e) => setFiltered(e.target.value)} />

         <label>Show done</label>
      </div>
   );
}
TodoFilter.propTypes = { isFiltered: PropTypes.bool, setFiltered: PropTypes.func };

export default TodoFilter;
