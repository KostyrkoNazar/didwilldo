import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

import "./styles.css";
import AddTodo from "../AddTodo/AddTodo";
import { postTodo } from "../api";

function TodoGroup(props) {
   const { postTodo, color, created, title, id, todoItems, todoList, nextItemId, todoCheckBox } = props;
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

   const apiPostTodo = (groupId, item) => {
      const group = {
         id: id,
         sortByColor: null,
         sortByCreated: null,
         color: color,
         title: title,
         created: created,
         todoList: todoList,
      };

      if (group.id === groupId) {
         const { todoList } = group;
         //const updatedGroup = { ...group, todoList: [...todoList, item] };
         todoList.push(item);
         postTodo(group.id, item);
      }
   };

   return (
      <div className="todoGroup">
         <div className="titleDateContainer" style={{ borderTopColor: color }}>
            <label className="groupTitle">{title}</label>
            <label className="groupDate">{created}</label>
         </div>

         <div className="itemsContainer">{todos}</div>

         <AddTodo id={id} nextItemId={nextItemId} apiPostTodo={apiPostTodo} />
      </div>
   );
}

TodoGroup.propTypes = {
   color: PropTypes.string,
   created: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.number,
   todoItems: PropTypes.array,
   todoList: PropTypes.array,
   nextItemId: PropTypes.number,
   todoCheckBox: PropTypes.func,
   postTodo: PropTypes.func,
};

const mapStateToProps = (state) => {
   return state;
};

const mapDispatchToProps = (dispatch) => ({
   postTodo: (id, todo) => dispatch(postTodo(id, todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup);
