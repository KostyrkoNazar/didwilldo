import React from "react";
import "./styles.css";

const TodoItem = ({ title, done, itemId, handleTodoCheckbox }) => {
   return (
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
};

export default TodoItem;
