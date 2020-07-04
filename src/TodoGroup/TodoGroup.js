import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

import "./styles.css";
import AddTodo from "../AddTodo/AddTodo";

function TodoGroup(props) {
   const { color, created, title, id, todoItems, nextItemId, todoCheckBox } = props;

   const todos = todoItems.map((item, index) => {
      if (
         (item.sortByDone === true || item.sortByDone === null) &&
         (item.sortByTitle === null || item.sortByTitle === true)
      ) {
         return (
            <TodoItem
               key={item.id + " " + index}
               title={item.title}
               done={item.done}
               itemId={item.id}
               handleTodoCheckbox={(todoId, done) => {
                  todoCheckBox(id, todoId, done);
               }}
            />
         );
      }

      return null;
   });

   return (
      <div className="todoGroup">
         <div className="titleDateContainer" style={{ borderTopColor: color }}>
            <label className="groupTitle">{title}</label>
            <label className="groupDate">{created}</label>
         </div>

         <div className="itemsContainer">{todos}</div>

         <AddTodo id={id} nextItemId={nextItemId} />
      </div>
   );
}

TodoGroup.propTypes = {
   color: PropTypes.string,
   created: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.number,
   todoItems: PropTypes.array,
   nextItemId: PropTypes.number,
   todoCheckBox: PropTypes.func,
};

const mapStateToProps = (state) => {
   return state;
};

export default connect(mapStateToProps)(TodoGroup);
