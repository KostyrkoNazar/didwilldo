import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

import "./styles.css";
import AddTodo from "../AddTodo/AddTodo";

function TodoGroup(props) {
   const { todoList, color, created, title, id, handleCheckbox } = props;
   // const todoItems = todoList.map((item, index) => {
   //    if (item["filtered"] && item.filtered !== false) {
   //       return (
   //          <TodoItem
   //             key={index}
   //             title={item.title}
   //             done={item.done}
   //             itemId={item.itemId}
   //             handleTodoCheckbox={(todoId, done) => {
   //                handleCheckbox(id, todoId, done);
   //             }}
   //          />
   //       );
   //    }

   // return null;
   // });

   return (
      <div className="todoGroup">
         {/*<div className="titleDateContainer" style={{ borderTopColor: color }}>*/}
         {/*   <label className="groupTitle">{title}</label>*/}
         {/*   <label className="groupDate">{created}</label>*/}
         {/*</div>*/}

         {/*<div className="itemsContainer">{todoItems}</div>*/}

         {/*<AddTodo />*/}
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

const mapStateToProps = (state) => {
   // return { todoList: state.todoList };
   return state;
};

export default connect(mapStateToProps)(TodoGroup);
