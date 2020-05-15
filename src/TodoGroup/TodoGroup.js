import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import "./styles.css";
import PropTypes from "prop-types";

function TodoGroup({ todoList, color, created, title, id, addTodo, handleCheckbox }) {
   const todoItems = todoList.map((item, index) => {
      if (item["filtered"] && item.filtered !== false) {
         return (
            <TodoItem
               key={index}
               title={item.title}
               done={item.done}
               itemId={item.itemId}
               handleTodoCheckbox={(todoId, done) => {
                  handleCheckbox(id, todoId, done);
               }}
            />
         );
      }

      return null;
   });

   return (
      <div className={"todoGroup"}>
         <div className="titleDateContainer" style={{ borderTopColor: color }}>
            <label className="groupTitle">{title}</label>
            <label className="groupDate">{created}</label>
         </div>

         <div className="itemsContainer">{todoItems}</div>

         <div>
            <AddTodo addNewTodo={addTodo} id={id} nextItemId={todoItems.length} />
         </div>
      </div>
   );
}

TodoGroup.propTypes = {
   todoList: PropTypes.array,
   color: PropTypes.string,
   created: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.number,
   addTodo: PropTypes.func,
   handleCheckbox: PropTypes.func,
};

export default TodoGroup;
