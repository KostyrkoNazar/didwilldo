import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

import "./styles.css";
import AddTodo from "../AddTodo/AddTodo";
import { postTodo } from "../api";
import { checkTodo } from "../actions";

function TodoGroup(props) {
   const { postTodo, checkTodo, color, created, title, id, todoList } = props;

   const todos = todoList.map((item, index) => {
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
                  checkTodo(id, todoId, done);
               }}
            />
         );
      }

      return null;
   });

   const apiPostTodo = (groupId, item) => {
      const group = {
         id: id,
         sortByColor: null,
         sortByCreated: null,
         color, // no need override parameter that have same key name
         title,
         created,
         todoList: [...todoList, item],
      };

      postTodo(group.id, group);
   };

   return (
      <div className="todoGroup">
         <div className="titleDateContainer" style={{ borderTopColor: color }}>
            <label className="groupTitle">{title}</label>
            <label className="groupDate">{created}</label>
         </div>

         <div className="itemsContainer">{todos}</div>

         <AddTodo id={id} nextItemId={todoList.length || 0} apiPostTodo={apiPostTodo} />
      </div>
   );
}

TodoGroup.propTypes = {
   color: PropTypes.string,
   created: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.number,
   todoList: PropTypes.array,
   checkTodo: PropTypes.func,
   postTodo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
   checkTodo: (groupId, todoId, done) => dispatch(checkTodo(groupId, todoId, done)),
   postTodo: (id, todo) => dispatch(postTodo(id, todo)),
});

export default connect(null, mapDispatchToProps)(TodoGroup);
