import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const TodoItem = ({ title, done, itemId, handleTodoCheckbox }) => (
   <div className="todoItem">
      <div className="checkboxContainer">
         <input
            className="todoCheckbox"
            type="checkbox"
            checked={done}
            onChange={() => handleTodoCheckbox(itemId, !done)}
         />
      </div>

      <div className="todoLabel">
         <label>{title}</label>
      </div>
   </div>
);

TodoItem.propTypes = {
   title: PropTypes.string.isRequired,
   done: PropTypes.bool.isRequired,
   itemId: PropTypes.number,
   handleTodoCheckbox: PropTypes.func,
};

export default TodoItem;
