import React from "react";
import PropTypes from "prop-types";
import { searchTodoByTitle } from "../actions";

import "./styles.css";
import { connect } from "react-redux";

function TodoSearch(props) {
   const { onChange, onClear, value, searchTodoByTitle } = props;

   return (
      <div className="searchTitle">
         <input
            type="text"
            placeholder="Type note..."
            name="search"
            value={value}
            onChange={(e) => {
               onChange(e.target.value);
               searchTodoByTitle(e.target.value);
            }}
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
   searchTodoByTitle: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
   searchTodoByTitle: (value) => dispatch(searchTodoByTitle(value)),
});

export default connect(null, mapDispatchToProps)(TodoSearch);
